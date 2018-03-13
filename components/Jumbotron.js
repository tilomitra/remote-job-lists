import Link from 'next/link'
import { Component } from "react";
import SearchBar from './SearchBar';
import Typing from 'react-typing-animation';
import PostJob from './PostJob';
import Email from './Email';

class Jumbotron extends Component {

    componentDidMount() {

    }
    render() {
        return (

            <div className="jumbotron jumbotron-fluid app-jumbotron" style={{ marginTop: 60 }} >
                <div className="container">
                    <h1 className="display-4">
                        Work Remotely as
                            <Typing>
                            <span className="app-jumbotron-typing">a Software Engineer</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">an Accountant</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">a Graphic Designer</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">an Android Developer</span>
                        </Typing>
                    </h1>
                    <p className="lead">Find your next job by searching through the largest remote listing database on the internet. <br /> Kept up to date every hour.</p>
                    <hr className="my-4" />
                    <p className="lead">
                        <SearchBar term={this.props.searchTerm} onSearch={this.props.onSearch} />
                    </p>
                    {/* <p className="lead">
                        <Email />
                    </p> */}
                    {/* <p className="lead">
                        <PostJob buttonLabel={"Post a job for $249/month"} />
                    </p> */}
                </div>
            </div>
        )
    }
}

export default Jumbotron


