import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import DataTable from './AdminPanel/DataTable';
import EntityForm from './AdminPanel/EntityForm';

const DataManagement = ({ apiUrl, columns, formFields }) => {
    const [data, setData] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showTable, setShowTable] = useState(false); // State variable for table visibility

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        if (showTable) {
            fetchData();
        }
        // console.log(data);
    }, [apiUrl, showTable]);

    const handleAddOrEdit = async (item) => {
        setLoading(true);
        try {
            if (editingItem) {
                // Update existing item
                await axios.put(`${apiUrl}/${editingItem._id}`, item);
            } else {
                // Create new item
                try {
                    const response = await axios.post(apiUrl, item);
                    setData(prevData => [...prevData, response.data]);
                } catch (error) {
                    // Check if the error is due to a unique constraint violation
                    if (error.response && error.response.status === 400) {
                        alert(error.response.data.error); // Use the error message from the server
                    } else {
                        console.error('Error creating item:', error);
                        alert('An unexpected error occurred. Please try again later.');
                    }
                    return; // Exit the function if there was an error
                }
            }
            setIsModalOpen(false);
            setEditingItem(null);
            // Refresh data after save
            const updatedData = await axios.get(apiUrl);
            setData(updatedData.data);
        } catch (error) {
            console.error('Error saving data:', error);
            alert('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setLoading(true);
            try {
                await axios.delete(`${apiUrl}/${id}`);
                setData(prevData => prevData.filter(item => item._id !== id));
            } catch (error) {
                console.error('Error deleting data:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const openModalForEdit = (item) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const openModalForAdd = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const toggleTableVisibility = () => {
        setShowTable(prevShowTable => !prevShowTable);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} className="d-flex justify-content-end mb-3">
                        <Button
                            onClick={toggleTableVisibility}
                            className="btn btn-primary"
                            style={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >
                            {showTable ? 'Hide Table' : 'Show Table'}
                        </Button>
                        <Button
                            onClick={openModalForAdd}
                            className="btn btn-primary ms-2"
                            style={{
                                backgroundColor: '#02b416',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >
                            Add New Item
                        </Button>
                    </Col>
                    {loading && showTable ? (
                        <Col xs={12} className="text-center">
                            <Spinner animation="border" />
                            <p>Loading...</p>
                        </Col>
                    ) : showTable && data.length > 0 ? (
                        <Col xs={12}>
                            <DataTable
                                data={data}
                                columns={columns}
                                onEdit={openModalForEdit}
                                onDelete={handleDelete}
                            />
                        </Col>
                    ) : showTable && data.length === 0 ? (
                        <Col xs={12}>
                            <p>No items available.</p>
                        </Col>
                    ) : null}
                </Row>
            </Container>
            <EntityForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddOrEdit}
                itemData={editingItem}
                fields={formFields}
            />
        </div>
    );
};

export default DataManagement;
