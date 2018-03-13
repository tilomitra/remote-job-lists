import { Component } from 'react';
import { Creatable } from 'react-select';
import Tags from '../connections/tags';
import forEach from 'lodash/forEach';
import cn from 'classnames';
import config from '../config';

import 'react-select/dist/react-select.css';


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: this.props.defaultValue ? [{ label: this.props.defaultValue, value: this.props.defaultValue }] : [],
            rtl: false,
            isValidEmail: true,
            componentState: 'not-sent' // can be 'not-sent', 'is-sending', 'sent', 'error', 
        }

    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            componentState: 'is-sending'
        });

        const res = fetch(`${config.host}/api/subscribe`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    tags: this.state.value
                })
            }).then((response) => {
                response.json()
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.statusCode === 200) {
                    this.setState({
                        componentState: 'sent'
                    });
                } else {
                    this.setState({
                        componentState: 'error'
                    });
                }
            }).catch((err) => {
                console.log(err);
                this.setState({
                    componentState: 'error'
                });
            });
    }

    handleEmailBlur = () => {
        let email = this.state.email;
        let isValidEmail = validateEmail(email);
        this.setState({ isValidEmail });
    }
    handleEmailChange = (e) => {

        let email = e.currentTarget.value;
        this.setState({ componentState: 'not-sent', email });
    }

    handleSelectChange = (value) => {
        this.setState({ componentState: 'not-sent', value });
    }

    render() {
        const { disabled, stayOpen, value, removeSelected, rtl, componentState, isValidEmail } = this.state;
        const didUserSearch = !!this.props.defaultValue;

        let options = [];
        forEach(Tags, (keywords, tag) => {
            options.push({ label: tag, value: tag });
        });

        let header, alertBox, subscribeBtnText = 'Receive Alerts';

        if (didUserSearch) {
            header = <h5 className="card-title">
                Get notified when new <span className="term">{this.props.defaultValue}</span> positions come out
            </h5>
        } else {
            header = <h5 className="card-title">
                Get Daily Job Listings
        </h5>
        }

        if (componentState === 'sent') {
            alertBox = (
                <div className="alert alert-success">You have successfully enabled daily job listing alerts. 👍</div>
            )
            subscribeBtnText = 'Daily Alerts Enabled';
        } else if (componentState === 'error') {
            alertBox = (
                <div className="alert alert-danger">There was an error when subscribing. Verify that your email address is correct, try again, or <a href="https://twitter.com/tilomitra" target="_blank">contact me</a>.</div>
            )
        } else if (componentState === 'is-sending') {
            subscribeBtnText = 'Loading...'
        }

        if (!isValidEmail) {
            alertBox = (
                <div className="alert alert-warning">We noticed a typo in your email address. Make sure you enter a correct email address before subscribing. 🙂</div>
            )
        }


        return (

            <div className="card app-email">
                <div className="card-body">
                    <h5 className="card-title">{header}</h5>
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-sm-12 col-md-4 my-1">
                                <label className="mr-sm-2">Email me at</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onBlur={this.handleEmailBlur}
                                    onChange={this.handleEmailChange} />
                            </div>
                            <div className="col-sm-12 col-md-6 my-1">
                                <label>with new listings related to</label>
                                <Creatable
                                    closeOnSelect={!stayOpen}
                                    disabled={disabled}
                                    multi
                                    onChange={this.handleSelectChange}
                                    options={options}
                                    placeholder={`Type keywords to only receive alerts for relevant listings.`}
                                    removeSelected={removeSelected}
                                    promptTextCreator={(label) => {
                                        return `Create job keyword: ${label}`
                                    }}
                                    rtl={rtl}
                                    value={value}
                                />
                            </div>
                            <div className="col-sm-12 col-md-2 my-1">
                                <button
                                    className="btn btn-success"
                                    style={{ marginTop: 35 }}
                                    onClick={this.onSubmit}
                                    disabled={(componentState !== 'not-sent' || !isValidEmail)}
                                >
                                    {subscribeBtnText}
                                </button>
                            </div>
                        </div>
                        <small className="form-text text-muted">
                            If you don't enter any tags, we'll send you alerts for all job listings daily. The keywords that you specify will be used to customize listings for your email. You can unsubscribe anytime. 🤝
                        </small>

                        {alertBox}
                    </form>
                </div>
            </div>
        )
    }
}

export default Email;