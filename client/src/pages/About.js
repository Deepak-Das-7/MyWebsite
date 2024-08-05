import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
// import PostManagement from '../components/Aboutpage/PostManagement';
// import ClassManage from '../components/AdminPanel/ClassManage';
import AssignmentManage from '../components/AdminPanel/AssignmentManage';
import { Container, Table } from 'react-bootstrap';
import ClassManage from '../components/AdminPanel/ClassManage';
import NavbarComponent from '../components/Navbar/Nav';

const About = () => {
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
                                <div>Course Management</div>
                                <UserManagement />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Student Management</div>
                                <UserManagement />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Teacher Management</div>
                                <ClassManage />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Exam Management</div>
                                <ClassManage />
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
                                <div>Subject Management</div>
                                <ClassManage />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Enrollment Management</div>
                                <ClassManage />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Grade Management</div>
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
                                <div>Attendance Management</div>
                                <ClassManage />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default About;
