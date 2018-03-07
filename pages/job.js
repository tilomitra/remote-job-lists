import { Component } from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import marked from 'marked';

const styles = {
}

class Job extends Component {
    render() {
        const { job } = this.props;
        let htmlDescription = job.description;

        if (job.referrer === 'remoteok') {
            htmlDescription = marked(job.description);
        }

        return (
            <Layout>
                <div className="content">
                    <h2>{job.title}</h2>
                </div>
                <div className="job-body" dangerouslySetInnerHTML={{ __html: htmlDescription }}></div>
            </Layout >
        )
    }
}

Job.getInitialProps = async function ({ query }) {
    const res = await fetch(`http://localhost:3000/api/jobs/${query.id}`)
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)
    return {
        job: data[0]
    }
}

export default Job