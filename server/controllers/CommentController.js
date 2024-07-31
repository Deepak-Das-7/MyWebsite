const Comment = require('../models/Comment');

// Create a new comment
exports.createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all comments
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ is_deleted: false }).sort({ createdAt: -1 }).populate('author').populate('post');
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a comment by ID
exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id, is_deleted: false }).populate('author').populate('post');
        if (!comment) return res.status(404).json({ error: 'Comment not found or has been deleted' });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a comment by ID
exports.updateCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.status(200).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a comment by ID
exports.deleteCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.status(200).json({ message: 'Comment marked as deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

