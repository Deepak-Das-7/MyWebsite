const Course = require('../models/Course');

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find({ is_deleted: false })
            .populate({
                path: 'subjects',
                select: 'name' // Adjust fields as necessary
            });

        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error);
    }
};
// Get a course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).send();
        }
        res.status(200).send(course);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a course by ID
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!course) {
            return res.status(404).send();
        }
        res.status(200).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a course by ID
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!course) {
            return res.status(404).json({ error: 'course not found' });
        }
        res.status(200).send(course);
    } catch (error) {
        res.status(500).send(error);
    }
};
