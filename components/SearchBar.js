import { Component } from 'react';
import classnames from 'classnames';
import { logEvent } from '../utils/analytics';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: props.term || ''
        }
    }
    onSearchClick = (e) => {
        e.preventDefault();
        logEvent('Search', this.state.searchTerm);
        this.props.onSearch(this.state.searchTerm);
    }
    render() {

        const { isSmall } = this.props;

        let suggestions;
        if (!isSmall) {
            suggestions = (
                <small style={{ color: "#ccc" }}>Try <em>"marketing"</em>, <em>"react"</em>, <em>"design"</em> or others.</small>
            )
        }

        return (
            [<form className="form-inline app-search">
                <input className={classnames("app-search-input form-control mr-sm-2", { 'form-control-lg': !isSmall })} type="search" placeholder="Search for a job..." value={this.state.searchTerm} onChange={(e) => {
                    this.setState({ searchTerm: e.currentTarget.value })
                }} />
                <button className={classnames("app-search-btn btn btn-primary my-2 my-sm-0", { 'form-control-lg': !isSmall, "btn-sm": isSmall })} type="submit" onClick={this.onSearchClick}>
                    {isSmall ? 'Search' : 'Search Remote Jobs'}
                </button>
            </form>,
            <div style={{ display: 'block' }}>{suggestions}</div>]

        )
    }
}

export default SearchBar;