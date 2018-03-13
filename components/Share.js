import Link from 'next/link'
import config from '../config';

const BASE_URL = config.host;

const Share = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Share</h5>
            <a href={`mailto:?subject=Check out this remote job posting: ${props.job.title}&body=You may be interested in this job posting. It's titled ${props.job.title} at ${props.job.company}: ${BASE_URL}/job/${props.job.id}`}>Send via Email</a>
            <hr />
            <a href={`https://www.linkedin.com/shareArticle?mini=true&source=Remote+Job+Lists&title=${props.job.title}&url=${BASE_URL}/job/${props.job.id}`}>Share on LinkedIn</a>
        </div>
    </div>
)

export default Share;