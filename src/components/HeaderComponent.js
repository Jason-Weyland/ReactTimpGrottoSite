import React, { Component } from "react";
import Jumbo from "./JumbotronComponent";
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";

// FONT AWESOME ICONS NOT WORKING, COME BACK TO FIX IT

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleTab = this.toggleTab.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    toggleTab() {
        
            window.location.reload(true)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Jumbo />
                <Navbar expand="sm" dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/" className="mr-auto">
                            <img src="/assets/images/logo.jpg" alt="brand" height="30" width="30" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg d-sm-none d-md-inline" /> Home
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <i className="fa fa-info fa-lg d-sm-none d-md-inline" /> About
                                    </DropdownToggle>
                                    <DropdownMenu color="dark" right>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/us">
                                                About Us
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/meet">
                                                Meet the Officers
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/faq">
                                                FAQ
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/join">
                                                Become A Member
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" to="/events">
                                        <i className="fa fa-newspaper-o fa-lg d-sm-none d-md-inline" /> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/caves">
                                        <i className="fa fa-compass fa-lg d-sm-none d-md-inline" /> Caves
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/join">
                                        <i className="fa fa-handshake-o fa-lg d-sm-none d-md-inline" /> Join
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-id-card fa-lg d-sm-none d-md-inline" />  Contact

                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg d-sm-none d-md-inline-block" /> Sign In
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h2>
                            <strong>Login</strong>
                        </h2>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => (this.username = input)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => (this.password = input)} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => (this.remember = input)} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Row className="d-flex justify-content-center">
                                <Button type="submit" value="submit" color="warning">
                                    Login
                                </Button>
                                <Button type="button" color="secondary" className="ml-1" onClick={this.toggleModal}>
                                    Cancel
                                </Button>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
