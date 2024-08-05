const Student = require('../models/Student');

// Create a new student
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        // console.log("YE TO GLT HAI RE =====", req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};
//login

exports.loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the student by email
        const student = await Student.findOne({ email });

        // Check if student exists
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }

        // Compare the provided password with the stored password
        if (password !== student.password) {
            return res.status(400).send({ message: 'Invalid password' });
        }

        // Update the last login date
        student.lastLogin = Date.now();
        await student.save(); // Save the updated student record

        // Send success response
        res.status(200).send({
            message: 'Login successful',
            userId: student
        });

    } catch (error) {
        res.status(500).send({ message: 'Server error', error });
    }
};;

// Get all students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find({ is_deleted: false })
            .populate({
                path: 'class',
                select: 'name' // Adjust fields as necessary based on your Class schema
            })
            .populate({
                path: 'enrollments',
                select: 'course dateEnrolled', // Adjust fields as necessary based on your Enrollment schema
                populate: {
                    path: 'course',
                    select: 'name' // Adjust fields as necessary based on your Course schema
                }
            });

        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a student by ID
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a student by ID
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { is_deleted: true },
            { new: true } // Return the updated document
        );
        if (!student) {
            return res.status(404).json({ error: 'student not found' });
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};
