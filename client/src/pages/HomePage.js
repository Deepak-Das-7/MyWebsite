import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarComponent from '../components/Sidebar/Sidebar';
import MainContent from '../components/MainContent/CardContent';

const HomePage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2} className="bg-light">
                        <SidebarComponent />
                    </Col>
                    <Col md={10} className="main-content">
                        <MainContent />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
