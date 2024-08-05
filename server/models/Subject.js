const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    is_deleted: { type: Boolean, default: false },
    name: { type: String, required: true },
    description: String,
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
});

module.exports = mongoose.model('Subject', subjectSchema);
