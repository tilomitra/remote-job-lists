import { Component } from 'react';
import Link from 'next/link'
import moment from 'moment';


class JobTitle extends Component {
    render() {
        let contents;
        //render the expanded view
        if (this.props.expanded) {
            contents = (
                <section>
                    <h2 className="job-title job-title-expanded">{this.props.job.title}</h2>
                    <p className="lead"><span className="muted">at</span> {this.props.job.company}</p>
                </section>
            )
        }
        // Render the compact view
        else {
            contents = (
                <Link prefetch as={`/job/${this.props.job.id}`} href={`/job?id=${this.props.job.id}`}>
                    <div className="job-list-item">
                        <h2 className="job-title job-title-compact">{this.props.job.title} <span className="muted">at</span> {this.props.job.company}</h2>
                        <span className="muted">Published</span> {moment(this.props.job.publishDate).startOf('day').fromNow()}, <span className="muted">Referred by</span> {this.props.job.referrer}
                    </div>
                </Link>
            )
        }

        return (
            <article>{contents}</article>
        )
    }
}
export default JobTitle;