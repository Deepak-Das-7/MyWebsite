import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploader from '../components/ImageUploader/ImageUploader';

const AddEditCard = ({ isOpen, onClose, onAdd, cardData }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    useEffect(() => {
        if (cardData) {
            setTitle(cardData.title || '');
            setDescription(cardData.description || '');
            setImage(cardData.image || '');
        } else {
            setTitle('');
            setDescription('');
            setImage('');
        }
    }, [cardData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCard = { title, description, image: uploadedImageUrl || image };
            await onAdd(newCard);
            onClose();
        } catch (error) {
            console.error('Error adding card:', error);
        }
    };

    const handleImageUpload = (imageUrl) => {
        console.log("Image URL received in handler:", imageUrl); // Debug line
        setUploadedImageUrl(imageUrl);
        setImage(imageUrl);
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{cardData ? 'Edit Card' : 'Add Card'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the title"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <ImageUploader onUpload={handleImageUpload} />
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image URL"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter the description"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        {cardData ? 'Edit Card' : 'Add Card'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddEditCard;
