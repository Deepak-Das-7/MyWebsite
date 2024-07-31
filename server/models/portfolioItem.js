const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
    is_delete: { type: Boolean, default: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});


module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
