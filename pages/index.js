import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import qs from 'query-string';
import Typing from 'react-typing-animation';


import config from '../config';
import Layout from '../components/Layout';
import Header from '../components/Header';
import JobTitle from '../components/JobTitle';
import SearchBar from '../components/SearchBar';
import Jumbotron from '../components/Jumbotron';
import Email from '../components/Email';


const LIMIT = 20;

const BASE_URL = config.host;


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
    }

    render() {

        const jobCards = this.props.jobs.map((job, i) => {
            return (
                <JobTitle job={job} key={`job-item-${i}`} />
            )
        })

        let leadLine = (
            <section className="text-center job-list-lead">
                <h5 className="title">
                    Showing <span className="count">{this.props.count} jobs</span> across all categories
            </h5>
            </section>
        )

            ;

        if (this.props.url.query.search) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{this.props.count} jobs</span> related to <span className="term">{this.props.url.query.search}</span>.
                    </h5>
                    <a className="reset" onClick={() => { this.onSearch(''); }}>Click to reset filters.</a>
                </section>
            );

        }

        return (
            <Layout>
                <Header searchTerm={this.props.url.query.search} onSearch={this.onSearch} />
                <Jumbotron searchTerm={this.props.url.query.search} onSearch={this.onSearch} />
                <section className="container">

                    {leadLine}

                    <Email defaultValue={this.props.url.query.search || null} />
                    <div className="job-list">
                        {jobCards}
                    </div>

                    <hr style={{ margin: '30px 0' }} />
                    <ReactPaginate
                        pageCount={Math.ceil(this.props.count / 50)}
                        marginPagesDisplayed={2}
                        onPageChange={this.onPageChange}
                        pageRangeDisplayed={5}
                        containerClassName={"pagination pagination-lg justify-content-center"}
                        pageClassName={"page-item"}
                        activeClassName={"active"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-link"}
                        breakClassName={"page-link disabled"}
                        nextClassName={"page-link"}

                    />
                </section>
            </Layout>
        )
    }
}

Index.getInitialProps = async function ({ query }) {


    const res = await fetch(BASE_URL + '/api/jobs?' + qs.stringify(query));
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.rows.length}/${data.count.length}`)

    return {
        jobs: data.rows,
        count: data.count.length
    }
}

export default Index