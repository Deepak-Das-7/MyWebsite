const Teacher = require('../models/Teacher');

// Create a new teacher
exports.createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).send(teacher);
    } catch (error) {
        res.status(400).send(error);
    }
};
//login
exports.loginTeacher = async (req, res) => {
    try {
        const { email, password } = req.body;
        const teacher = await Teacher.findOne({ email });

        if (!teacher) {
            return res.status(404).send({ message: 'teacher not found' });
        }
        if (password !== teacher.password) {
            return res.status(400).send({ message: 'Invalid password' });
        }
        teacher.lastLogin = Date.now();
        await teacher.save();

        res.status(200).send({
            message: 'Login successful',
            userId: teacher
        });

    } catch (error) {
        res.status(500).send({ message: 'Server error', error });
    }
};

// Get all teachers
exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({ is_deleted: false })
            .populate({
                path: 'subjects',
                select: 'name' // Adjust fields as necessary based on your Subject schema
            });

        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).send();
        }
        res.status(200).send(teacher);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a teacher by ID
exports.updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!teacher) {
            return res.status(404).send();
        }
        res.status(200).send(teacher);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!teacher) {
            return res.status(404).json({ error: 'teacher not found' });
        }
        res.status(200).send(teacher);
    } catch (error) {
        res.status(500).send(error);
    }
};
