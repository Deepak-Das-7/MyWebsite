import React, { useState } from 'react';

const TeacherLoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        // For example:
        const userId = 'existing_teacher_id'; // Replace with actual user ID from backend
        onSubmit(userId);
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
                <label htmlFor="teacherEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="teacherEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="teacherPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="teacherPassword" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );
};

export default TeacherLoginForm;
