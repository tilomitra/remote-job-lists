import Link from 'next/link'
import { Component } from 'react';
import config from '../config';
import feather from 'feather-icons';
const BASE_URL = config.host;


class Share extends Component {

    componentDidMount() {
        feather.replace();
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Share</h5>
                    <a href={`mailto:?subject=Check out this remote job posting: ${this.props.job.title}&body=You may be interested in this job posting. It's titled ${this.props.job.title} at ${this.props.job.company}: ${BASE_URL}/job/${this.props.job.id}`}>
                        <i data-feather={'mail'} style={{ width: 16, marginRight: 10, top: 6, position: 'relative' }} />
                        Send via Email
                    </a>
                    <hr />
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&source=Remote+Job+Lists&title=${this.props.job.title}&url=${BASE_URL}/job/${this.props.job.id}`}>
                        <i data-feather={'linkedin'} style={{ width: 16, marginRight: 10, top: 6, position: 'relative' }} />
                        Share on LinkedIn
                    </a>
                </div>
            </div>);
    }
}


export default Share;