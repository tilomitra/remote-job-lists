import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import moment from 'moment';
import ReactPaginate from 'react-paginate';

import "../assets/css/app.css";

const LIMIT = 50;

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

    onPageChange = (page) => {
        const { selected } = page;
        Router.push({
            pathname: '/',
            query: {
                limit: LIMIT,
                offset: selected * LIMIT
            }
        })
    }
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

                <ReactPaginate
                    pageCount={Math.ceil(this.props.count / 50)}
                    marginPagesDisplayed={2}
                    onPageChange={this.onPageChange}
                    pageRangeDisplayed={5}
                />
            </Layout>
        )
    }
}

Index.getInitialProps = async function ({ query }) {

    const findJobsUrl = 'http://localhost:3000/api/jobs';
    let params;
    if (query.limit || query.offset) {
        params = `?limit=${query.limit || LIMIT}&offset=${query.offset || 0}`;
    } else {
        params = '';
    }

    const res = await fetch(findJobsUrl + params);
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.rows.length}/${data.count.length}`)

    return {
        jobs: data.rows,
        count: data.count.length
    }
}

export default Index