const ApplyButton = (props) => (
    <div className="card">
        <div className="card-body">
            <a className="btn btn-primary btn-block job-apply-button" href={props.job.link}>Apply to this position</a>
        </div>
    </div>

)

export default ApplyButton