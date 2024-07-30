import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from '../Card/Card1';
import axios from 'axios';


const CardContent = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
                setPortfolioItems(response.data)
            } catch (error) {
                console.error('There was an error fetching the portfolio items!', error);
                throw error;
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {portfolioItems.length > 0 ? (
                    portfolioItems.map(item => (
                        <Col key={item._id} md={3} className="mb-3">
                            <CardComponent item={item} />
                        </Col>
                    ))
                ) : (
                    <Col xs={12}>
                        <p>No portfolio items available.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default CardContent;
