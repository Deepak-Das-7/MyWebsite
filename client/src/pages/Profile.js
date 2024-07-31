import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
import PostManagement from '../components/AdminPanel/PostManagement';
import TagManagement from '../components/AdminPanel/TagManagement';
import { Container, Table } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container style={{ marginTop: "1rem" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Section</th>
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User Management</td>
                        <td><UserManagement /></td>
                    </tr>
                    <tr>
                        <td>Post Management</td>
                        <td><PostManagement /></td>
                    </tr>
                    <tr>
                        <td>Tag Management</td>
                        <td><TagManagement /></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Profile;
