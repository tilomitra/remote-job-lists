import { Component } from 'react';
import Tag from './Tag';
class Leadline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { search, tags, count } = this.props;
        let leadLine, tagjsx = [];

        if (tags) {
            tagjsx = tags.split(',').map((t) => { return <Tag name={t} key={t} /> })
        }

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
                    <a className="reset" onClick={() => { this.props.onSearch(''); }}>Click to reset filters.</a>
                </section>
            );
        }

        else if (search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} jobs</span> that match <span className="term">{search}</span> and have the tags {tagjsx}
                    </h5>
                    <a className="reset" onClick={() => { this.props.onSearch(''); }}>Click to reset filters.</a>
                </section>
            );
        }

        else if (!search && tags) {
            leadLine = (
                <section className="text-center job-list-lead">
                    <h5 className="title">
                        Showing <span className="count">{count} jobs</span> that have the tags {tagjsx}
                    </h5>
                    <a className="reset" onClick={() => { this.props.onSearch(''); }}>Click to reset filters.</a>
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