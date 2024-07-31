const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({ is_deleted: false }).sort({ createdAt: -1 });
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id, is_deleted: false });
        if (!category) return res.status(404).json({ error: 'Category not found or has been deleted' });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a category by ID
exports.updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json({ message: 'Category marked as deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

