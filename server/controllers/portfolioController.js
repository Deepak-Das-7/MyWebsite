const PortfolioItem = require('../models/portfolioItem');

const getPortfolioItems = async (req, res) => {
    try {
        const items = await PortfolioItem.find({ is_delete: false }).sort({ createdAt: -1 });
        res.status(200).json(items);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPortfolioItem = async (req, res) => {
    const { title, description, image } = req.body; // Destructure to check

    if (!title || !description || !image) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const item = new PortfolioItem({
        title,
        description,
        image
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const editPortfolioItem = async (req, res) => {
    const { id } = req.params;
    const updates = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    };
    try {
        const updatedItem = await PortfolioItem.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: 'Portfolio item not found' });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePortfolioItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await PortfolioItem.findByIdAndUpdate(
            id,
            { is_delete: true },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: 'Portfolio item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    getPortfolioItems,
    createPortfolioItem,
    editPortfolioItem,
    deletePortfolioItem
};
