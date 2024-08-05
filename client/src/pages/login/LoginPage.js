import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from '../../userContext'
import TeacherLoginForm from './TeacherLoginForm';
import StudentLoginForm from './StudentLoginForm';
import TeacherSignupForm from './TeacherSignupForm';
import StudentSignupForm from './StudentSignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [userType, setUserType] = useState('student');
    const [apiUrl] = useState(process.env.REACT_APP_API_URL);
    const { setUserId } = useSession();
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            let response;
            if (userType === 'teacher') {
                response = await axios.post(`${apiUrl}/teachers`, formData);
            } else {
                response = await axios.post(`${apiUrl}/students/login`, formData);
            }
            setUserId(response.data.userId)
            // alert('Login successful!');
            navigate('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('There was an error logging in.');
        }
    };

    const handleSignup = async (formData) => {
        try {
            let response;
            if (userType === 'teacher') {
                response = await axios.post(`${apiUrl}/teachers`, formData);
            } else {
                response = await axios.post(`${apiUrl}/students`, formData);
            }
            console.log(response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Error Registration in:', error);
            alert('There was an error Registration in.');
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                    <div className="card p-4 shadow-sm" style={{ width: '100%' }}>
                        <h1 className="text-center mb-4">
                            {isSignup ? 'Create Your Account' : 'Login to Your Account'}
                        </h1>
                        <div className="text-center mb-3">
                            <button
                                className={`btn ${userType === 'teacher' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                                onClick={() => setUserType('teacher')}
                            >
                                Teacher
                            </button>
                            <button
                                className={`btn ${userType === 'student' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                                onClick={() => setUserType('student')}
                            >
                                Student
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            {userType === 'teacher' && (
                                isSignup ? <TeacherSignupForm onSubmit={handleSignup} /> : <TeacherLoginForm onSubmit={handleLogin} />
                            )}
                            {userType === 'student' && (
                                isSignup ? <StudentSignupForm onSubmit={handleSignup} /> : <StudentLoginForm onSubmit={handleLogin} />
                            )}
                        </div>
                        <div className="text-center mb-4">
                            {!isSignup ? (
                                <p>
                                    Don’t have an account?{' '}
                                    <button className="btn btn-link" onClick={() => setIsSignup(true)}>Sign Up</button>
                                </p>
                            ) : (
                                <p>
                                    Already have an account?{' '}
                                    <button className="btn btn-link" onClick={() => setIsSignup(false)}>Login</button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
