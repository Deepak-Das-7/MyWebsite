import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from '../Card/Card1';
import { FetchPost } from '../../Functions/FetchPost';

const CardContent = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        FetchPost()
            .then(data => setPortfolioItems(data))
            .catch(error => console.error('Error fetching posts:', error));
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
