const Photo = require('../models/photo');

const getPhoto = async (req, res) => {
    try {
        const items = await Photo.find({ is_delete: false }).sort({ createdAt: -1 });
        res.status(200).json(items);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPhoto = async (req, res) => {
    const { image } = req.body; // Destructure to check

    if (!image) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const item = new Photo({
        image
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



module.exports = {
    getPhoto,
    createPhoto,
};
