import React, { Component } from "react";
import Jumbo from "./JumbotronComponent";
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// FONT AWESOME ICONS NOT WORKING, COME BACK TO FIX IT

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
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
                                            <NavLink className="nav-link text-dark" to="/about">
                                                About Us
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/officers">
                                                Meet the Officers
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/about/FAQ">
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
                                        <i className="fa fa-newspaper fa-lg d-sm-none d-md-inline" /> News & Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/caves">
                                        <i className="fas fa-mountain fa-lg d-sm-none d-md-inline" /> Caves
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/join">
                                        <i className="fa fa-handshake fa-lg d-sm-none d-md-inline" /> Join Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-id-card fa-lg d-sm-none d-md-inline" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
