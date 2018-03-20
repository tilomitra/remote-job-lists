import { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import marked from "marked";

import Layout from "../components/Layout";
import JobTitle from "../components/JobTitle";
import ApplyButton from "../components/ApplyButton";
import Company from "../components/Company";
import Share from "../components/Share";
import Tag from "../components/Tag";
import Header from "../components/Header";
import Meta from "../components/Meta";

import config from "../config";

const BASE_URL = config.host;

class Job extends Component {
    onSearch = async searchTerm => {
        Router.push({
            pathname: "/",
            query: {
                search: searchTerm
            }
        });
    };

    render() {
        const { job } = this.props;
        let htmlDescription = job.description;

        if (job.referrer === "remoteok") {
            htmlDescription = marked(job.description);
        }

        const tags = job.tags;
        const tagsJsx = tags.map((t, i) => {
            return <Tag name={t} key={`tag-${t}-${i}`} />;
        });

        return (
            <Layout>
                <Meta
                    title={`${job.title} at ${job.company} | Remote Job Lists`}
                    description={`${job.company} is looking to hire a ${
                        job.title
                    }. This position is available to remote candidates.`}
                    url={BASE_URL + this.props.url.asPath}
                />
                <Header onSearch={this.onSearch} />
                <div className="container" style={{ marginTop: 60 }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <JobTitle job={job} expanded={true} />
                            <div
                                className="job-description"
                                dangerouslySetInnerHTML={{
                                    __html: htmlDescription
                                }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4 job-sidebar">
                            <ApplyButton job={job} />
                            <Company companyName={job.company} />

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Related Jobs</h5>
                                    <p>Find more jobs related to:</p>
                                    {tagsJsx}
                                    <hr />
                                    <p>
                                        Find more jobs at{" "}
                                        <Link href={"/?search=" + job.company}>
                                            {job.company}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <Share job={job} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Job.getInitialProps = async function({ query }) {
    const res = await fetch(`${BASE_URL}/api/jobs/${query.id}`);
    const data = await res.json();

    return {
        job: data[0]
    };
};

export default Job;
