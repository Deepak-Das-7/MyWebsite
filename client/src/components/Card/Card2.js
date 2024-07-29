import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ card, onEdit, onDelete }) => {
    return (
        <Card className="m-2 shadow-sm" style={{ width: '100%', maxWidth: '18rem', height: '100%', backgroundColor: "#f7f7f7" }}>
            {card.image && (
                <Card.Img
                    variant="top"
                    src={card.image}
                    alt={card.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}
            <Card.Body className="d-flex flex-column">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text className="text-truncate">
                    {card.description}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => onEdit(card)}>
                        <i className="bi bi-pencil-fill"></i>
                    </Button>
                    <Button variant="secondary" onClick={() => onDelete(card)}>
                        <i className="bi bi-trash-fill"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
