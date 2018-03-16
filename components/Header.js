import Link from 'next/link'
import { Component } from 'react';
import SearchBar from './SearchBar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import feather from 'feather-icons';
import { logEvent } from '../utils/analytics';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
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
    toggleModal = () => {
        logEvent("Application", "interest in sponsor");
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
                    <Nav>
                        <Button color="danger" size="sm" style={{ marginLeft: 10 }} onClick={this.toggleModal}>
                            Post a Job for $199
                    </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Post a Job</ModalHeader>
                            <ModalBody>
                                <div className="alert alert-warning">
                                    We're finishing up a brand new user interfaces to allow employers to publish remote jobs. It's not quite ready yet, so we'll have to do this the old-fashioned way. 🚧
                                </div>

                                <p>
                                    If you're interested in posting a job, please <a href="mailto?tilomitra@gmail.com">send an email </a>
                                    with the following:
                                    </p>
                                <ul>
                                    <li>Job title</li>
                                    <li>Job description</li>
                                    <li>Company name</li>
                                    <li>Company website</li>
                                    <li>Any other information you wish to promote</li>
                                </ul>

                                <p>Please note that we can only publish jobs that are 100% remote.</p>

                                <h5>Visibility</h5>
                                <p>A paid job posting will be visible in the following way:</p>

                                <ul>
                                    <li>It will be available for 30 days on the top of every search result page (not just Page 1) from day of payment.</li>
                                    <li>It will be highlighted in a light yellow background.</li>
                                    <li>We'll make sure the description is nicely formatted with the rest of the website.</li>
                                </ul>

                                <p>
                                    Sounds good? <a className="btn btn-primary btn-sm" href="mailto:tilomitra@gmail.com">Send an email</a> to get started.
                                </p>

                            </ModalBody>
                        </Modal>
                    </Nav>

                </Collapse>


            </Navbar>

        );
    }
}


export default Header