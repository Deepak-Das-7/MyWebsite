import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ item }) => {
    return (
        <Card className="m-2 shadow-sm" style={{ width: '100%', maxWidth: '18rem', height: '100%', backgroundColor: "#f7f7f7" }}>
            {item.image && (
                <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}
            <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-truncate">
                    {item.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
