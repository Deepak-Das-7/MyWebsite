import React, { useState } from 'react';

const StudentSignupForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [classId, setClassId] = useState('');
    const [enrollments, setEnrollments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            class: classId,
            enrollments: enrollments.split(',').map(id => id.trim())
        };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="classId" className="form-label">Class ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="classId"
                    placeholder="Enter class ID"
                    value={classId}
                    onChange={(e) => setClassId(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="enrollments" className="form-label">Enrollments (comma-separated IDs)</label>
                <input
                    type="text"
                    className="form-control"
                    id="enrollments"
                    placeholder="Enter enrollment IDs"
                    value={enrollments}
                    onChange={(e) => setEnrollments(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
    );
};

export default StudentSignupForm;
