import { Component } from "react";
import Select from "react-select";
import Link from "next/link";
import Tags from "../connections/tags";
import forEach from "lodash/forEach";
import cn from "classnames";
import config from "../config";
import { logEvent } from "../utils/analytics";
import Categories from "../components/Categories";

import "react-select/dist/react-select.css";

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: this.props.defaultValue
                ? [
                      {
                          label: this.props.defaultValue,
                          value: this.props.defaultValue
                      }
                  ]
                : [],
            rtl: false,
            isValidEmail: true,
            componentState: "not-sent" // can be 'not-sent', 'is-sending', 'sent', 'error',
        };
    }
    onSubmit = e => {
        e.preventDefault();
        logEvent("Email", "subscribed");

        this.setState({
            componentState: "is-sending"
        });

        const res = fetch(`${config.host}/api/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                tags: this.state.value
            })
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        componentState: "sent"
                    });

                    setTimeout(() => {
                        this.setState({
                            componentState: "not-sent"
                        });
                    }, 3000);
                } else {
                    this.setState({
                        componentState: "error"
                    });
                }
            })
            .catch(err => {
                this.setState({
                    componentState: "error"
                });
            });
    };

    handleEmailBlur = () => {
        logEvent("Email", "interacted with email box");
        let email = this.state.email;
        let isValidEmail = validateEmail(email);
        this.setState({ isValidEmail });
    };
    handleEmailChange = e => {
        let email = e.currentTarget.value;
        this.setState({ componentState: "not-sent", email });
    };

    handleSelectChange = value => {
        logEvent("Email", JSON.stringify(value));

        this.setState({ componentState: "not-sent", value });
    };

    render() {
        const {
            disabled,
            stayOpen,
            value,
            removeSelected,
            rtl,
            componentState,
            isValidEmail
        } = this.state;
        const didUserSearch = !!this.props.defaultValue;

        const { type } = this.props;

        let options = [];
        forEach(Tags, (keywords, tag) => {
            options.push({ label: tag, value: tag });
        });

        let header,
            alertBox,
            subscribeBtnText = "Receive Alerts";

        if (didUserSearch) {
            header = (
                <h5 className="card-title">
                    Get notified when new{" "}
                    <span className="term">{this.props.defaultValue}</span>{" "}
                    positions come out
                </h5>
            );
        } else {
            header = <h5 className="card-title">Get Job Notifications</h5>;
        }

        if (componentState === "sent") {
            alertBox = (
                <div className="alert alert-success">
                    You will be notified whenever we receive new listings. 👍
                </div>
            );
            subscribeBtnText = "Daily Alerts Enabled";
        } else if (componentState === "error") {
            alertBox = (
                <div className="alert alert-danger">
                    There was an error when subscribing. Verify that your email
                    address is correct, try again, or{" "}
                    <a href="https://twitter.com/tilomitra" target="_blank">
                        get in touch
                    </a>.
                </div>
            );
        } else if (componentState === "is-sending") {
            subscribeBtnText = "Loading...";
        }
        if (!isValidEmail) {
            alertBox = (
                <div className="alert alert-warning">
                    We noticed a typo in your email address. Make sure you enter
                    a correct email address before subscribing. 🙂
                </div>
            );
        }
        if (type === "expanded") {
            return (
                <div
                    className={cn("card app-email", {
                        "app-email-bg": !this.props.noBackground
                    })}
                >
                    <div className="card-body">
                        {this.props.hideTitle ? null : (
                            <h5 className="card-title">{header}</h5>
                        )}
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-sm-12 col-md-12 my-1">
                                    <label className="mr-sm-2">
                                        Email me at
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={this.state.email}
                                        onBlur={this.handleEmailBlur}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-12 my-1">
                                    <label>with new listings related to</label>
                                    <Categories
                                        hideFilter
                                        onSelect={selected => {
                                            this.setState({ value: selected });
                                        }}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-12 my-1">
                                    <button
                                        className="btn btn-success"
                                        onClick={this.onSubmit}
                                        disabled={
                                            componentState !== "not-sent" ||
                                            !isValidEmail
                                        }
                                    >
                                        {subscribeBtnText}
                                    </button>
                                    <small style={{ paddingLeft: 10 }}>
                                        View a{" "}
                                        <Link href="/email-example">
                                            <span
                                                style={{
                                                    color: "#e8585f",
                                                    cursor: "pointer",
                                                    textDecoration: "underline"
                                                }}
                                            >
                                                sample email notification
                                            </span>
                                        </Link>
                                    </small>
                                </div>
                            </div>
                            <small className="form-text text-muted">
                                If you don't enter any tags, we'll send you
                                alerts for all job listings when we find new
                                jobs. The keywords that you specify will be used
                                to customize listings for your email. You can
                                unsubscribe anytime. 🤝
                            </small>

                            {alertBox}
                        </form>
                    </div>
                </div>
            );
        } else if (type === "compact") {
            return (
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-sm-12 col-md-6 my-1">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onBlur={this.handleEmailBlur}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4 my-1">
                            <button
                                className="btn btn-success"
                                onClick={this.onSubmit}
                                disabled={
                                    componentState !== "not-sent" ||
                                    !isValidEmail
                                }
                            >
                                {subscribeBtnText}
                            </button>
                        </div>
                    </div>
                    {alertBox}
                </form>
            );
        } else if (type === "footer") {
            return (
                <div className="app-email fixed-bottom d-none d-sm-block border-top">
                    <div className="card-body">
                        {alertBox}
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-sm-4">
                                    <label className="mr-sm-2">
                                        Send an email to
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={this.state.email}
                                        onBlur={this.handleEmailBlur}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label>
                                        when new listings arrive related to
                                    </label>
                                    <Select
                                        closeOnSelect={!stayOpen}
                                        className="creatable-fixed-bottom"
                                        disabled={disabled}
                                        multi
                                        onChange={this.handleSelectChange}
                                        options={options}
                                        placeholder={`Leave blank to get all listings emailed to you`}
                                        removeSelected={removeSelected}
                                        rtl={rtl}
                                        value={value}
                                    />
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        className="btn btn-success"
                                        style={{
                                            top: 15,
                                            position: "relative"
                                        }}
                                        onClick={this.onSubmit}
                                        disabled={
                                            componentState !== "not-sent" ||
                                            !isValidEmail
                                        }
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
export default Email;
