import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
import PostManagement from '../components/AdminPanel/PostManagement';
import TagManagement from '../components/AdminPanel/TagManagement';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="mb-4">
                    <h1>User Management</h1>
                    <UserManagement />
                </Col>
                <Col xs={12} className="mb-4">
                    <h1>Post Management</h1>
                    <PostManagement />
                </Col>
                <Col xs={12} className="mb-4">
                    <h1>Tag Management</h1>
                    <TagManagement />
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
