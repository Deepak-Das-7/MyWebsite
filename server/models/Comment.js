const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    is_deleted: { type: Boolean, default: false },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
