import React, { useState } from 'react';

const TeacherSignupForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        // For example:
        const userId = 'new_teacher_id'; // Replace with actual user ID from backend
        onSubmit(userId);
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
                <label htmlFor="teacherName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="teacherName" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="teacherEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="teacherEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="teacherPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="teacherPassword" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
    );
};

export default TeacherSignupForm;
