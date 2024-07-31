const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    is_deleted: { type: Boolean, default: false },
    name: { type: String, required: true, unique: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Tag', tagSchema);
