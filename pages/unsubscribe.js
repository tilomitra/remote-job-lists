import { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import config from "../config";
import { logEvent } from "../utils/analytics";
import fetch from "isomorphic-unfetch";

class Unsubscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            status: null
        };
    }

    handleUnsubscribe = () => {
        fetch(`${config.host}/api/unsubscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email
            })
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        status: "success",
                        message:
                            "You have unsubscribed sucessfully. You will not get further email notifications."
                    });
                } else if (response.status === 400) {
                    this.setState({
                        status: "danger",
                        message: `There was an error when unsubscribing this account.
                        Please try again.`
                    });
                }
            })
            .catch(err => {
                this.setState({
                    status: "danger",
                    message: `There was an error when unsubscribing this account.
                    Please try again.`
                });
            });
    };
    render() {
        const { status } = this.state;
        let statusJsx;

        if (status) {
            statusJsx = (
                <div className={`alert alert-${this.state.status}`}>
                    <p>{this.state.message}</p>
                </div>
            );
        }

        return (
            <div
                className="container"
                style={{ paddingTop: 50, maxWidth: "600px" }}
            >
                <h2>Unsubscribe</h2>
                <p className="lead">
                    I'm sorry to see you go. But if you really want to, please
                    enter your email address below to unsubscribe from further
                    remote job notifications.
                </p>
                <p className="lead">
                    If you have suggestions on how I can improve Remote Job
                    Lists, please let me know by{" "}
                    <a href="mailto:tilomitra@gmail.com">emailing me</a> or{" "}
                    <a href="https://twitter.com/tilomitra">tweeting to me</a>.
                </p>

                <p className="lead">
                    Thanks, <br /> Tilo
                </p>

                <form>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={e => {
                                this.setState({ email: e.currentTarget.value });
                            }}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={this.handleUnsubscribe}
                            >
                                Unsubscribe
                            </button>
                        </div>
                    </div>
                    {statusJsx}
                </form>

                <hr />

                <Link href="/">
                    <button className="btn btn-lg btn-danger">
                        View 500+ Current Remote Job Listings
                    </button>
                </Link>
            </div>
        );
    }
}

export default Unsubscribe;
