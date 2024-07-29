import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SidebarComponent = () => {
    return (
        <Nav defaultActiveKey="/" className="flex-column">
            <LinkContainer to="/">
                <Nav.Link className="text-dark">Overview</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className="text-dark">Reports</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className="text-dark">Analytics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className="text-dark">Export</Nav.Link>
            </LinkContainer>
        </Nav>
    );
};

export default SidebarComponent;
