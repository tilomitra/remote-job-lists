import { Component } from 'react';
import Link from 'next/link'
import moment from 'moment';


class JobTitle extends Component {
    render() {
        let contents;

        let tagList = this.props.job.Tags.map((t) => {
            return <span className="badge">{t.id}</span>
        });

        //render the expanded view
        if (this.props.expanded) {
            contents = (
                <section>
                    <h2 className="job-title job-title-expanded">{this.props.job.title}</h2>
                    <p className="lead"><span className="muted">at</span> <span className="job-company">{this.props.job.company}</span></p>
                </section>
            )
        }
        // Render the compact view
        else {
            contents = (

                <div className="job-list-item">
                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            <Link prefetch as={`/job/${this.props.job.id}`} href={`/job?id=${this.props.job.id}`}>
                                <h2 className="job-title job-title-compact">{this.props.job.title} <span className="muted">at</span> <span className="job-company">{this.props.job.company}</span></h2>
                            </Link>
                            <span className="muted">Published</span> {moment(this.props.job.publishDate).startOf('day').fromNow()}, <span className="muted">Referred by</span> {this.props.job.tags}{this.props.job.referrer}
                        </div>
                        <div className="col-sm-6 col-md-4">
                            {tagList}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <article>{contents}</article>
        )
    }
}
export default JobTitle;