import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
import CourseManagement from '../components/AdminPanel/CourseManage';
import ClassManage from '../components/AdminPanel/ClassManage';
import AssignmentManage from '../components/AdminPanel/AssignmentManage';
import NavbarComponent from '../components/Navbar/Nav';
import { Container, Table } from 'react-bootstrap';

const Admin = () => {
    return (
        <div>
            <NavbarComponent />
            <Container style={{ marginTop: "1rem" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Management</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>User Management</div>
                                <UserManagement />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Class Management</div>
                                <ClassManage />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Assignment Management</div>
                                <AssignmentManage />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Course Management</div>
                                <CourseManagement />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Admin;
