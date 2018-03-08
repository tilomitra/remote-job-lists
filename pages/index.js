import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import qs from 'query-string';
import Typing from 'react-typing-animation';

import Layout from '../components/Layout';
import JobTitle from '../components/JobTitle';
import SearchBar from '../components/SearchBar';
import Jumbotron from '../components/Jumbotron';

const LIMIT = 50;

const FIND_JOBS_URL = 'http://localhost:3000/api/jobs';


class Index extends Component {

    constructor(props) {
        super(props);
    }

    onPageChange = (page) => {
        const { selected } = page;
        Router.push({
            pathname: '/',
            query: {
                limit: LIMIT,
                offset: selected * LIMIT,
                search: this.props.url.query.search
            }
        })
    }

    onSearch = async (searchTerm) => {
        Router.push({
            pathname: '/',
            query: {
                search: searchTerm
            }
        })
        // const res = await fetch(FIND_JOBS_URL + `?search=${searchTerm}`);
        // const data = await res.json();

        // this.setState({
        //     jobs: data.rows,
        //     count: data.count.length
        // });
    }

    render() {

        const jobCards = this.props.jobs.map((job, i) => {
            return (
                <JobTitle job={job} key={`job-item-${i}`} />
            )
        })

        return (
            <Layout>
                <Jumbotron searchTerm={this.props.url.query.search} onSearch={this.onSearch} />
                <section className="container">
                    <div className="job-list">
                        {jobCards}
                    </div>

                    <ReactPaginate
                        pageCount={Math.ceil(this.props.count / 50)}
                        marginPagesDisplayed={2}
                        onPageChange={this.onPageChange}
                        pageRangeDisplayed={5}
                        containerClassName={"paginate"}
                    />
                </section>
            </Layout>
        )
    }
}

Index.getInitialProps = async function ({ query }) {


    const res = await fetch(FIND_JOBS_URL + '?' + qs.stringify(query));
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.rows.length}/${data.count.length}`)

    return {
        jobs: data.rows,
        count: data.count.length
    }
}

export default Index