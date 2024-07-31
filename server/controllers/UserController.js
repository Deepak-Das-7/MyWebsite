const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        if (err.code === 11000) { // MongoDB duplicate key error code
            if (err.message.includes('username')) {
                return res.status(400).json({ error: 'Username already in use' });
            }
            if (err.message.includes('email')) {
                return res.status(400).json({ error: 'Email already in use' });
            }
        }
        res.status(400).json({ error: err.message });
    }
};


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ is_deleted: false }).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id, is_deleted: false });
        if (!user) return res.status(404).json({ error: 'User not found or has been deleted' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User marked as deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

