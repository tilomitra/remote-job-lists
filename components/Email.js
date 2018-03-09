import { Component } from 'react';
import Select from 'react-select';
import Tags from '../connections/tags';
import forEach from 'lodash/forEach';

import 'react-select/dist/react-select.css';

class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: this.props.defaultValue ? [{ label: this.props.defaultValue, value: this.props.defaultValue }] : [],
            rtl: false
        }

    }
    onSubmit = () => {

    }

    handleSelectChange = (value) => {
        console.log('You\'ve selected:', value);
        this.setState({ value });
    }

    render() {
        const { disabled, stayOpen, value, removeSelected, rtl } = this.state;
        const didUserSearch = !!this.props.defaultValue;

        let options = [];
        forEach(Tags, (keywords, tag) => {
            options.push({ label: tag, value: tag });
        });

        let header;

        if (didUserSearch) {
            header = <h5 className="card-title">
                Get notified for new <span className="term">{this.props.defaultValue}</span> positions
            </h5>
        } else {
            header = <h5 className="card-title">
                Get Daily Job Listings
        </h5>
        }

        return (

            <div className="card app-email">
                <div className="card-body">
                    <h5 className="card-title">{header}</h5>
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-sm-12 col-md-4 my-1">
                                <label className="mr-sm-2">Email me at</label>
                                <input type="text" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="col-sm-12 col-md-6 my-1">
                                <label>with new listings related to</label>
                                <Select
                                    closeOnSelect={!stayOpen}
                                    disabled={disabled}
                                    multi
                                    onChange={this.handleSelectChange}
                                    options={options}
                                    placeholder={`You can type "design", "engineering", or more...`}
                                    removeSelected={removeSelected}
                                    rtl={rtl}
                                    simpleValue
                                    value={value}
                                />
                            </div>
                            <div className="col-sm-12 col-md-2 my-1">
                                <button className="btn btn-success" style={{ marginTop: 35 }}>Subscribe</button>
                            </div>
                        </div>
                        <small className="form-text text-muted">
                            The tags that you specify will be used to customize listings for your email. You can unsubscribe anytime.
                        </small>
                    </form>
                </div>
            </div>
        )
    }
}

export default Email;