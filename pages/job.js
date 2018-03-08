import { Component } from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import marked from 'marked';

import Layout from '../components/Layout';
import JobTitle from '../components/JobTitle';
import ApplyButton from '../components/ApplyButton';

class Job extends Component {
    render() {
        const { job } = this.props;
        let htmlDescription = job.description;

        if (job.referrer === 'remoteok') {
            htmlDescription = marked(job.description);
        }

        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <JobTitle job={job} />
                            <div className="job-description" dangerouslySetInnerHTML={{ __html: htmlDescription }}></div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <ApplyButton job={job} />
                        </div>
                    </div>
                </div>



            </Layout >
        )
    }
}

Job.getInitialProps = async function ({ query }) {
    const res = await fetch(`http://localhost:3000/api/jobs/${query.id}`)
    const data = await res.json()

    return {
        job: data[0]
    }
}

export default Job