const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String, // URL or path to profile picture
        default: 'default-profile-pic.png'
    },
    bio: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
