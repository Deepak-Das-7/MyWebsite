import React, { useState, useEffect } from 'react';
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
} from './User';

const UserComponent = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const usersData = await getAllUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleCreateUser = async () => {
        try {
            const newUser = await createUser(formData);
            setUsers([...users, newUser]);
            setFormData({
                username: '',
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            });
        } catch (error) {
            console.error('Failed to create user:', error);
        }
    };

    const handleUpdateUser = async () => {
        if (!selectedUser) return;
        try {
            const updatedUser = await updateUserById(selectedUser._id, formData);
            setUsers(users.map((user) => (user._id === updatedUser._id ? updatedUser : user)));
            setSelectedUser(null);
            setFormData({
                username: '',
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            });
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUserById(id);
            setUsers(users.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    const handleEditClick = async (id) => {
        try {
            const user = await getUserById(id);
            setSelectedUser(user);
            setFormData({
                username: user.username,
                email: user.email,
                password: '', // Do not pre-fill password for security reasons
                firstName: user.firstName,
                lastName: user.lastName
            });
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Management</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    selectedUser ? handleUpdateUser() : handleCreateUser();
                }}
                className="mb-4"
            >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {selectedUser ? 'Update' : 'Create'} User
                </button>
            </form>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {user.username} - {user.email}
                        <div>
                            <button
                                className="btn btn-info btn-sm mr-2"
                                onClick={() => handleEditClick(user._id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteUser(user._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
