import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
import ClassManage from '../components/AdminPanel/ClassManage';
import AssignmentManage from '../components/AdminPanel/AssignmentManage';
import { Container, Table } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar/Nav';

const Profile = () => {
    return (
        <div>

            <NavbarComponent />
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
                            <td><ClassManage /></td>
                        </tr>
                        <tr>
                            <td>Tag Management</td>
                            <td><AssignmentManage /></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>

    );
};

export default Profile;
