const Tag = require('../models/Tag');

// Create a new tag
exports.createTag = async (req, res) => {
    try {
        const tag = new Tag(req.body);
        await tag.save();
        res.status(201).json(tag);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all tags
exports.getAllTags = async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a tag by ID
exports.getTagById = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        if (!tag) return res.status(404).json({ error: 'Tag not found' });
        res.status(200).json(tag);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a tag by ID
exports.updateTagById = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tag) return res.status(404).json({ error: 'Tag not found' });
        res.status(200).json(tag);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a tag by ID
exports.deleteTagById = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id);
        if (!tag) return res.status(404).json({ error: 'Tag not found' });
        res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
