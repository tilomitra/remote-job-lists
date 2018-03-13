import Link from 'next/link';
import { Component } from 'react';
import feather from 'feather-icons';
import tags from '../connections/tags';


class Tag extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        feather.replace();
    }
    render() {
        return (
            <Link href={{
                pathname: '/',
                query: { tags: this.props.name }
            }}>
                <span className="job-tag badge">
                    <i data-feather={tags[this.props.name].icon} />
                    <span className="job-tag-name">{this.props.name}</span>
                </span>
            </Link>
        )
    }
}

export default Tag