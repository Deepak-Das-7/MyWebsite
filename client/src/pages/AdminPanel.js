import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEditCard from '../Functions/AddEditCard';
import CardComponent from '../components/Card/Card2';
import { Container, Row, Col } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Admin = () => {
    const [cards, setCards] = useState([]);
    const [editingCard, setEditingCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [update, setUpdate] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
                setCards(response.data)
            } catch (error) {
                console.error('There was an error fetching the portfolio items!', error);
                throw error;
            }
        };
        fetchData();
    }, [update]);


    const handleAddOrEditCard = async (card) => {
        try {
            if (editingCard) {
                await axios.put(`${process.env.REACT_APP_API_URL}/edit/${editingCard._id}`, card);
            } else {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}`, card);
                setCards([...cards, response.data]);
            }
            setUpdate(update + 1);
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteCard = async (id) => {
        if (window.confirm('Are you sure you want to delete this card?')) {
            try {
                await axios.put(`${process.env.REACT_APP_API_URL}/delete/${id}`);
                setUpdate(update - 1);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const openModalForEdit = (card) => {
        setEditingCard(card);
        setIsModalOpen(true);
    };

    const openModalForAdd = () => {
        setEditingCard(null);
        setIsModalOpen(true);
    };

    return (
        <div >
            <button
                onClick={openModalForAdd}
                className="position-fixed btn btn-primary"
                style={{
                    top: "0.3rem",
                    right: '1rem',
                    zIndex: 1000,
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <i className="bi bi-plus" style={{ fontSize: '3rem' }}></i>
            </button>
            <Container>
                <Row>
                    {cards.length > 0 ? (
                        cards.map(item => (
                            <Col key={item._id} md={3} className="mb-3">
                                <CardComponent
                                    card={item}
                                    onEdit={() => openModalForEdit(item)}
                                    onDelete={() => handleDeleteCard(item._id)}
                                />
                            </Col>
                        ))
                    ) : (
                        <Col xs={12}>
                            <p>No portfolio items available.</p>
                        </Col>
                    )}
                </Row>
            </Container>

            <AddEditCard
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddOrEditCard}
                cardData={editingCard}
            />
        </div>
    );
};

export default Admin;
