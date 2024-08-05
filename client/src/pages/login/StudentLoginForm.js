import React, { useState } from 'react';

const StudentLoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password
        };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
                <label htmlFor="studentEmail" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="studentEmail"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="studentPassword" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="studentPassword"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );
};

export default StudentLoginForm;
