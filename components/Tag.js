import Link from 'next/link';
import Router from 'next/router'
import { Component } from 'react';
import feather from 'feather-icons';
import tags from '../connections/tags';
import { logEvent } from '../utils/analytics';


class Tag extends Component {
    constructor(props) {
        super(props);
    }

    handleTagClick = () => {
        logEvent('Tag Click', this.props.name);
        Router.push({
            pathname: '/',
            query: { tags: this.props.name }
        })
    }
    componentDidMount() {
        feather.replace();
    }
    render() {
        return (
            <span className="job-tag badge" onClick={this.handleTagClick}>
                <i data-feather={tags[this.props.name].icon} />
                <span className="job-tag-name">{this.props.name}</span>
            </span>
        )
    }
}

export default Tag