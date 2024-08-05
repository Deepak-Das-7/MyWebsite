import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContent from '../components/MainContent/CardContent';
import { Col } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar/Nav';

const Dashboard = () => {
    return (
        <div>
            <NavbarComponent />
            <Col className="main-content">
                <CardContent />
            </Col>
        </div>
    );
};

export default Dashboard;
