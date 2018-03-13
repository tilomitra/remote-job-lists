import { Component } from 'react';
import Tag from './Tag';
import feather from 'feather-icons';

class Leadline extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        feather.replace();
    }
    render() {
        let { search, tags, count } = this.props;
        let leadLine, tagjsx = [];

        if (tags) {
            tagjsx = tags.split(',').map((t) => { return <Tag name={t} key={t} /> })
        }

        let resetBtn = (
            <a className="reset" onClick={() => { this.props.onSearch(''); }}>
                <i data-feather="x-circle" />
                Reset filters
            </a>
        )

        if (!search && !tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} remote jobs</span> across all categories and employers
                </h5>
                </section>
            )
        }
        else if (search && !tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} jobs</span> related to <span className="term">{search}</span>
                    </h5>
                    {resetBtn}
                </section>
            );
        }

        else if (search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} jobs</span> that match <span className="term">{search}</span> with tags <br /> {tagjsx}
                    </h5>
                    {resetBtn}
                </section>
            );
        }

        else if (!search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} jobs</span> with tags <br />  {tagjsx}
                    </h5>
                    {resetBtn}
                </section>
            );
        }


        return (
            <section className="app-leadline">
                {leadLine}
            </section>
        )
    }
}

export default Leadline;