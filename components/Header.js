import Link from 'next/link'
import { Component } from 'react';
import SearchBar from './SearchBar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar fixed="top" color="dark" dark expand="md" className="justify-content-between">
                <NavbarBrand href="/">Remote Job Lists</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <SearchBar isSmall={true} term={this.props.searchTerm || ''} onSearch={this.props.onSearch} />
                    </Nav>
                </Collapse>

            </Navbar>

        );
    }
}


export default Header