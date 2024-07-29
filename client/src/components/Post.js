import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Post = ({ item }) => {

    console.log(item)

    return (
        <Card className="m-3 shadow-sm" style={{ width: '18rem', height: '25rem' }}>
            <Card.Img variant="top" src={item.image} alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-truncate">{item.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Post;
