import { Component } from 'react';
import Link from 'next/link'
import moment from 'moment';
import Tag from '../components/Tag';
import ApplyButton from '../components/ApplyButton';


class JobTitle extends Component {
    render() {
        let contents;

        let tagList = this.props.job.tags.map((t, i) => {
            return <Tag name={t} key={`tag-${t}-${i}`} />
        });

        //render the expanded view
        if (this.props.expanded) {
            contents = (
                <section>
                    <h2 className="job-title job-title-expanded">{this.props.job.title}</h2>
                    <p className="job-title-lead"><span className="muted">at</span> <span className="job-company">{this.props.job.company}</span></p>
                </section>
            )
        }
        // Render the compact view
        else {
            contents = (

                <div className="job-list-item">
                    <div className="row">
                        <div className="col-sm-6">
                            <Link prefetch as={`/job/${this.props.job.id}`} href={`/job?id=${this.props.job.id}`}>
                                <h2 className="job-title job-title-compact">{this.props.job.title} <span className="muted">at</span> <span className="job-company">{this.props.job.company}</span></h2>
                            </Link>
                            <span className="muted">Published</span> {moment(this.props.job.publishDate).startOf('day').fromNow()}
                        </div>
                        <div className="col-sm-4">
                            {tagList}
                        </div>
                        <div className="col-sm-2 text-right job-list-item-apply">
                            <a className="btn job-apply-button" href={this.props.job.link}>Apply</a>
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