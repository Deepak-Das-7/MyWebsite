import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from '../components/MainContent/CardContent';
import { Col } from 'react-bootstrap';



const Dashboard = () => {

    return (
        <Col className="main-content">
            <MainContent />
        </Col>
    );
};

export default Dashboard;
