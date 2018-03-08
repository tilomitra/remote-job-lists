import { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: props.term || ''
        }
    }
    onSearchClick = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }
    render() {
        return (
            <form className="form-inline app-search">
                <input className="app-search-input form-control form-control-lg mr-sm-2" type="search" placeholder="Enter a skill like 'software' or 'design'..." value={this.state.searchTerm} onChange={(e) => {
                    this.setState({ searchTerm: e.currentTarget.value })
                }} />
                <button className="app-search-btn btn btn-lg btn-primary my-2 my-sm-0" type="submit" onClick={this.onSearchClick}>Find Remote Jobs</button>
            </form>
        )
    }
}

export default SearchBar;