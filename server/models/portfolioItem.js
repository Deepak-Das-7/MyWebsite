const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    is_delete: { type: Boolean, default: false }
}, {
    timestamps: true
});


module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
