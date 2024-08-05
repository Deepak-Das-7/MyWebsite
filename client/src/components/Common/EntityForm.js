import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import ImageUploader from '../ImageUploader/ImageUploader';
import axios from 'axios';

const EntityForm = ({ isOpen, onClose, onSave, itemData, fields = [] }) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [validated, setValidated] = useState(false);
    const [dropdownOptions, setDropdownOptions] = useState({});

    useEffect(() => {
        if (itemData) {
            setFormData(itemData);
            if (itemData.image) {
                setUploadedImageUrl(itemData.image);
            }
        } else {
            setFormData({});
            setUploadedImageUrl('');
        }
    }, [itemData]);

    useEffect(() => {
        const fetchDropdownOptions = async () => {
            const options = {};
            for (const field of fields) {
                if (field.type === 'object' && field.isArray) {
                    const response = await axios.get(field.apiEndpoint);
                    options[field.name] = response.data;
                }
            }
            setDropdownOptions(options);
        };

        fetchDropdownOptions();
    }, [fields]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageUpload = (base64Image) => {
        setFormData(prevData => ({
            ...prevData,
            image: base64Image
        }));
        setUploadedImageUrl(base64Image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidated(true);
        const imageField = fields.find(field => field.type === 'image');
        if (imageField && !formData.image) {
            console.log('Image is required'); // Handle the error as needed
        } else {
            setLoading(true);
            await onSave(formData);
            setLoading(false);
            onClose();
        }
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{itemData ? 'Edit Item' : 'Add Item'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <Form.Group key={field.name} controlId={`form-${field.name}`} className="mb-3">
                            <Form.Label>{field.label}</Form.Label>
                            {field.type === 'image' ? (
                                <>
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
                                        value={formData.image || ''}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Image URL"
                                        hidden
                                    />
                                    {!uploadedImageUrl && !formData.image && validated && (
                                        <Form.Text className="text-danger">
                                            An image is required.
                                        </Form.Text>
                                    )}
                                </>
                            ) : field.type === 'object' && field.isArray ? (
                                <Form.Control
                                    as="select"
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    required={field.required || false}
                                    disabled={loading}
                                >
                                    <option value="">Select {field.label}</option>
                                    {dropdownOptions[field.name] && dropdownOptions[field.name].map(option => (
                                        <option key={option._id} value={option._id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            ) : (
                                <Form.Control
                                    type={field.type || 'text'}
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    placeholder={field.placeholder || ''}
                                    required={field.required || false}
                                    disabled={loading}
                                />
                            )}
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
