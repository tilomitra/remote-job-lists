import { Component } from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import moment from 'moment';

import "../assets/css/app.css";


const styles = {
    jobCards: {
        margin: 5
    },
    jobTitle: {
        fontWeight: 'normal',
        marginBottom: 0,
        paddingBottom: 0
    },
    muted: {
        color: 'grey'
    }
}

class Index extends Component {
    render() {

        const jobCards = this.props.jobs.map((job, i) => {
            return (
                <article style={styles.jobCards} key={`job-item-${i}`}>
                    <Link as={`/job/${job.id}`} href={`/job?id=${job.id}`}>
                        <h3 style={styles.jobTitle}>{job.title} <span style={styles.muted}>at</span> {job.company}</h3>
                    </Link>
                    <div style={styles.muted}>
                        Published {moment(job.publishDate).startOf('day').fromNow()}, Referred by {job.referrer}
                    </div>
                </article>
            )
        })

        return (
            <Layout>
                <div className="content">
                    {jobCards}
                </div>
            </Layout>
        )
    }
}

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/jobs')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        jobs: data
    }
}

export default Index