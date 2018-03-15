import { Component } from 'react';
import { logEvent } from '../utils/analytics';

class ApplyButton extends Component {
    handleClick = (e) => {
        e.preventDefault();
        logEvent('Application', 'went to read application');
        window.location.href = e.currentTarget.href;
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <a className="btn btn-primary btn-block job-apply-button" href={this.props.job.link} onClick={this.handleClick}>Apply</a>
                </div>
            </div>
        )
    }
}

export default ApplyButton