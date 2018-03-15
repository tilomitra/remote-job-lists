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
import Categories from '../components/Categories';
import Tag from '../components/Tag';
import Leadline from '../components/Leadline';
import Meta from '../components/Meta';

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

    onSearch = async (searchTerm, searchTags = this.props.url.query.tags) => {
        Router.push({
            pathname: '/',
            query: {
                search: searchTerm,
                tags: searchTags
            }
        })
    }

    render() {

        const { search, tags } = this.props.url.query;
        let jobCards = this.props.jobs.map((job, i) => {
            return (
                <JobTitle job={job} key={`job-item-${i}`} />
            )
        })

        return (
            <Layout>
                <Meta
                    title={"Remote Job Lists"}
                    description={"Remote Job Lists provides a daily updated list of all remote job listings from across the internet. We list remote jobs for engineering, software, marketing, accounting, media, design and more."}
                    url={this.props.url}
                />
                <Header searchTerm={this.props.url.query.search} onSearch={this.onSearch} />
                <Jumbotron searchTerm={this.props.url.query.search} onSearch={this.onSearch} />
                <section className="container">

                    <Leadline search={search} tags={tags} count={this.props.count} onSearch={this.onSearch} />

                    <div className="row">
                        <div className="col-sm-12">
                            <Categories selectedCategories={this.props.url.query.tags} />
                        </div>
                        <div className="col-sm-12">
                            <div className="job-list">
                                {jobCards}
                            </div>
                        </div>

                    </div>





                    <hr style={{ margin: '30px 0' }} />
                    <ReactPaginate
                        pageCount={Math.ceil(this.props.count / 50)}
                        marginPagesDisplayed={2}
                        onPageChange={this.onPageChange}
                        pageRangeDisplayed={2}
                        containerClassName={"pagination justify-content-center"}
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