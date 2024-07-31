import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploader from '../components/ImageUploader/ImageUploader';

const AddEditCard = ({ isOpen, onClose, onAdd, cardData }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (cardData) {
            setTitle(cardData.title || '');
            setContent(cardData.content || '');
            setImage(cardData.image || '');
            setTags(cardData.tags || '');
            setAuthor(cardData.author || '');
            setUploadedImageUrl(cardData.image || '');
        } else {
            setTitle('');
            setContent('');
            setImage('');
            setTags('');
            setAuthor('');
            setUploadedImageUrl('');
        }
    }, [cardData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        try {
            const newCard = { title, content, author, tags, image: uploadedImageUrl || image };
            await onAdd(newCard);
            onClose();
        } catch (error) {
            console.error('Error adding card:', error);
        }
    };

    const handleImageUpload = (imageUrl) => {
        setUploadedImageUrl(imageUrl);
        setImage(imageUrl);
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{cardData ? 'Edit Card' : 'Add Card'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the title"
                            required
                            isInvalid={!title && validated}
                        />
                        <Form.Control.Feedback type="invalid">
                            Title is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formImage" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <ImageUploader onUpload={handleImageUpload} />
                        {uploadedImageUrl && (
                            <div className="mb-3">
                                <img
                                    src={uploadedImageUrl}
                                    alt="Preview"
                                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image URL"
                            hidden
                        />
                        {!uploadedImageUrl && !image && validated && (
                            <Form.Text className="text-danger">
                                An image is required.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group controlId="formAuthor" className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            rows={3}
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Enter the content"
                            required
                            isInvalid={!author && validated}
                        />
                        <Form.Control.Feedback type="invalid">
                            Author is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formTag" className="mb-3">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control
                            type="text"
                            rows={3}
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Enter the Tags"
                            required
                            isInvalid={!tags && validated}
                        />
                        <Form.Control.Feedback type="invalid">
                            Tag is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter the content"
                            required
                            isInvalid={!content && validated}
                        />
                        <Form.Control.Feedback type="invalid">
                            Content is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        {cardData ? 'Save Changes' : 'Add Card'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddEditCard;
