import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../userContext';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const { userId } = useSession();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            // Clear user session or token if needed here
            navigate('/');
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm" style={{ padding: '0 5%' }}>
            <Navbar.Brand href="/" className="font-weight-bold" style={{ fontSize: '2rem', color: '#baf8b2', marginRight: "5rem" }}>
                {userId ? `Hello, ${userId.firstName}` : 'Dashboard'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-flex align-items-center">
                    <LinkContainer to="/dashboard">
                        <Nav.Link style={{ margin: '0 1rem' }}>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link style={{ margin: '0 1rem' }}>Profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link style={{ margin: '0 1rem' }}>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link style={{ margin: '0 1rem' }}>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="ml-auto d-flex align-items-center">
                    <LinkContainer to="/adminPanel">
                        <Nav.Link className="font-weight-bold" style={{ margin: '0 1rem', color: '#26f20c' }}>AdminPanel</Nav.Link>
                    </LinkContainer>
                    <Nav.Link className="font-weight-bold" style={{ margin: '0 1rem', color: "red" }} onClick={handleLogout}>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
