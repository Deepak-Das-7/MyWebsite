const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({ is_deleted: false }).sort({ createdAt: -1 }).populate('author').populate('comments');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id, is_deleted: false }).populate('author').populate('comments');
        if (!post) return res.status(404).json({ error: 'Post not found or has been deleted' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Update a post by ID
exports.updatePostById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a post by ID
exports.deletePostById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json({ message: 'Post marked as deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
