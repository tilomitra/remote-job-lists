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
import feather from 'feather-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        //feather.replace();
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar fixed="top" color="light" light expand="md" className="justify-content-between">
                <NavbarBrand href="/">
                    Remote Job Lists
                </NavbarBrand>
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