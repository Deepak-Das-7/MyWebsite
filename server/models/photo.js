const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    image: { type: String, required: true },
    is_delete: { type: Boolean, default: false }
}, {
    timestamps: true
});


module.exports = mongoose.model('Photo', photoSchema);
