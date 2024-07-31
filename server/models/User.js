const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    is_deleted: { type: Boolean, default: false },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    image: { type: String, default: 'https://picsum.photos/800' },
    bio: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
