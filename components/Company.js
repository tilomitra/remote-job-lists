import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || null,
            domain: props.domain || null,
            logo: props.logo || null
        }
    }
    componentDidMount() {

        fetch(`https://company.clearbit.com/v1/domains/find?name=${this.props.companyName}`, {
            headers: {
                'Authorization': 'Bearer sk_0e43c071064f84259c79d020da6f598c'
            }
        }).then(r => {
            return r.json();
        }).then((result) => {
            this.setState({
                name: result.name,
                domain: 'http://' + result.domain,
                logo: result.logo
            })
        }).catch((err) => {
            console.log(err); // Domain could not be found
        });
    }

    render() {

        if (this.state.domain && this.state.name) {
            return (
                <div className="card">
                    <div className="card-body text-center">
                        <img src={this.state.logo} width="72" height="auto" style={{ padding: 10 }} />
                        <h5 className="card-title">
                            <a href={this.state.domain} className="card-link" rel="_blank">
                                Visit {this.state.name}'s Website</a></h5>
                    </div>
                </div >
            )
        } else {
            return (
                <div className="card">
                    <div className="card-body">We could not find information about this company.</div>
                </div>
            )
        }

    }
}


Company.getInitialProps = async function () {


    const res = await fetch(`https://company.clearbit.com/v1/domains/find?name=${this.props.companyName}`, {
        headers: {
            'Authorization': 'Bearer sk_0e43c071064f84259c79d020da6f598c'
        }
    });

    const data = await res.json();

    return {
        name: data.name,
        domain: 'http://' + data.domain,
        logo: data.logo
    }
}

export default Company