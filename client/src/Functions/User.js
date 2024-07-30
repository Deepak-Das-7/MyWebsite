import axiosInstance from './Utils';

// Create a new user
export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error.response?.data || error.message);
        throw error;
    }
};

// Get all users
export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error.response?.data || error.message);
        throw error;
    }
};

// Get a user by ID
export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error.response?.data || error.message);
        throw error;
    }
};

// Update a user by ID
export const updateUserById = async (id, userData) => {
    try {
        const response = await axiosInstance.put(`/users/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error.response?.data || error.message);
        throw error;
    }
};

// Delete a user by ID
export const deleteUserById = async (id) => {
    try {
        const response = await axiosInstance.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error.response?.data || error.message);
        throw error;
    }
};
