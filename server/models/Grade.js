const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    is_deleted: { type: Boolean, default: false },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    grade: { type: String, required: true } // e.g., "A", "B", "C"
});

module.exports = mongoose.model('Grade', gradeSchema);
