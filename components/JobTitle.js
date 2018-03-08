import Link from 'next/link'
import moment from 'moment';

const JobTitle = (props) => (
    <article className="job-list-item">
        <Link prefetch as={`/job/${props.job.id}`} href={`/job?id=${props.job.id}`}>
            <div>
                <h2 className="job-list-item-title">{props.job.title} <span className="muted">at</span> {props.job.company}</h2>
                <span className="muted">Published</span> {moment(props.job.publishDate).startOf('day').fromNow()}, <span className="muted">Referred by</span> {props.job.referrer}
            </div>
        </Link>
    </article>
)

export default JobTitle