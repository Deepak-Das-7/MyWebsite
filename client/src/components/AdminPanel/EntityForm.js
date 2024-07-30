import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EntityForm = ({ isOpen, onClose, onSave, itemData, fields = [] }) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (itemData) {
            setFormData(itemData);
        } else {
            setFormData({});
        }
    }, [itemData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSave(formData);
        setLoading(false);
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{itemData ? 'Edit Item' : 'Add Item'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <Form.Group key={field.name} controlId={`form-${field.name}`} className="mb-3">
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                type={field.type || 'text'}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                placeholder={field.placeholder || ''}
                                required={field.required || false}
                                disabled={loading}
                            />
                        </Form.Group>
                    ))}
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary" onClick={onClose} className="me-2" disabled={loading}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="me-2"
                                    />
                                    Saving...
                                </>
                            ) : (
                                'Save'
                            )}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EntityForm;
