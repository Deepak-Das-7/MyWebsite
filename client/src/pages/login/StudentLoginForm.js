import React, { useState } from 'react';

const StudentLoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle form validation errors

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.'); // Set error message if fields are empty
            return;
        }
        setError(''); // Clear any previous errors
        const formData = { email, password };
        onSubmit(formData); // Call the onSubmit function passed as a prop
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
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message if any */}
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );
};

export default StudentLoginForm;
