import { Component } from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import config from "../config";

class EmailExample extends Component {
    render() {
        const boldStyle = { color: "blue", fontWeight: "bold" };

        const tagStyle = {
            background: "#e1ecf4",
            color: "#15c",
            borderRadius: "2px",
            fontSize: "12px",
            border: "1px solid #e1ecf4",
            padding: "5px 6px",
            marginRight: "3px",
            marginBottom: "5px",
            whiteSpace: "nowrap"
        };

        const jobs = [
            {
                title: " Full Stack Javascript Engineer",
                company: "GLAMSQUAD",
                tags: ["web", "backend", "mobile", "engineering"]
            },
            {
                title: "Senior Full Stack Rails Engineer",
                company: "Riderflex LLC",
                tags: ["web", "backend", "engineering", "management"]
            },
            {
                title: "Front-end Developer Hipchat",
                company: "Atlassian",
                tags: ["web", "engineering"]
            },
            {
                title: "Full Stack Developer Lunar Labs",
                company: "Lunar Wireless",
                tags: ["web", "backend", "engineering"]
            },
            {
                title: "Senior Java Developer",
                company: "Binance",
                tags: ["mobile", "backend", "engineering", "management"]
            }
        ];

        let jobsJsx = jobs.map(j => {
            let tagsJsx = j.tags.map(t => {
                return (
                    <span style={tagStyle} key={`${j.company}-${t}`}>
                        {t}
                    </span>
                );
            });

            return (
                <div style={{ marginTop: 20 }} key={j.company}>
                    <strong>
                        {j.title} <small>at {j.company}</small>
                    </strong>
                    <br />
                    {tagsJsx}
                </div>
            );
        });

        return (
            <Layout>
                <Meta
                    title={`A Sample Email Notification | Remote Job Lists`}
                    description={`This is a sample email notification sent by Remote Job Lists.
                    It's indicative of what a regular email looks like. I took
                    out the links because the email is now stale.
                    `}
                    url={config.host + this.props.url.asPath}
                />
                <div
                    className="container"
                    style={{ marginTop: 30, maxWidth: 750 }}
                >
                    <h2>A Sample Email Notification</h2>
                    <p className="lead">
                        The content below is from an actual email that I
                        received via <a href="/">Remote Job Lists</a>. It's
                        indicative of what a regular email looks like. I took
                        out the links because the email is now stale.
                    </p>

                    <section
                        style={{
                            maxWidth: 500,
                            padding: 15,
                            margin: "30px auto 20px auto",
                            border: "1px solid #ddd",
                            boxShadow: "0 2px 2px rgba(0,0,0,0.15)",
                            borderRadius: 5
                        }}
                    >
                        <p>Hi!</p>
                        <p>
                            There were <span style={boldStyle}>32</span> remote
                            jobs posted between{" "}
                            <span style={boldStyle}>March 18th, 18</span> and
                            today that may be interesting to you.
                        </p>

                        <p>
                            You told me you were interested in jobs related to:
                        </p>
                        <p>
                            <span style={tagStyle}>mobile</span>
                            <span style={tagStyle}>design</span>
                            <span style={tagStyle}>engineering</span>
                        </p>

                        <p>
                            Here are just a few jobs that matched the categories
                            that you mentioned.
                        </p>

                        {jobsJsx}

                        <p style={{ marginTop: 10 }}>
                            These are just 5 of the jobs that were matched
                            against your preferences. To view all 22 job
                            listings, head over to Remote Job Lists.
                        </p>

                        <a href="/" className="btn btn-dark">
                            View All Relevant Jobs
                        </a>

                        <div style={{ marginTop: 20 }}>
                            <p style={{ fontSize: "0.9em", color: "#666" }}>
                                Hi, I'm Tilo from Remote Job Lists. Thanks for
                                subscribing and trying out Remote Job Lists. I
                                really appreciate it. 😊
                            </p>

                            <p style={{ fontSize: "0.9em", color: "#666" }}>
                                You're receiving this email because you asked to
                                be notified about new remote job listings. If
                                you don't want to receive these emails, you can
                                unsubscribe here.
                            </p>

                            <p style={{ fontSize: "0.9em", color: "#666" }}>
                                You can contact me personally by responding back
                                to this email, or at @tilomitra. Finally, I'm
                                supposed to put this information here for legal
                                reasons, but feel free to send me gifts. 🎁
                            </p>

                            <hr />

                            <p style={{ fontSize: "0.9em", color: "#666" }}>
                                Tilo Mitra | 12 Yonge Street, #711, Toronto ON |
                                Made with ❤️ in Canada
                            </p>
                        </div>
                    </section>
                    <p className="lead text-center">
                        Interested in getting emails like this? Sign up using
                        the form below.
                    </p>
                </div>
            </Layout>
        );
    }
}
export default EmailExample;
