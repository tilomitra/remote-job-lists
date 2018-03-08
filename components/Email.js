import Link from 'next/link'



const Email = (props) => (
    <div className="card">
        <div className="card-body">
            <p>
                <a href={`mailto:?subject=Check out this remote job posting: ${props.job.title}&body=You may be interested in this job posting. It's titled ${props.job.title} at ${props.job.company}: http://localhost:3000/job/${props.job.id}`}>Email this position</a>
            </p>
            <p>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&source=Remote+Job+Lists&title=${props.job.title}&url=http://localhost:3000/job/${props.job.id}`}>Share on LinkedIn</a>
            </p>
        </div>
    </div>
)

export default Email