import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Navbar.Brand href="/" className="font-weight-bold">
                Das
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div className="d-flex align-items-center">
                        <Nav className="mr-2">
                            <LinkContainer to="/dashboard">
                                <Nav.Link className="text-light">Dashboard</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/profile">
                                <Nav.Link className="text-light">Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className="text-light">Contact</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className="text-light">About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </div>
                </Nav>
                <Nav className="ml-auto">
                    <LinkContainer to="/adminPanel">
                        <Nav.Link className="text-light">AdminPanel</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
