import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';
import Testing from './Testing';
import AdminPanel from './AdminPanel';
import LoginPage from './login/LoginPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/adminPanel" element={<PrivateRoute element={<AdminPanel />} />} />
        <Route path="/testing" element={<PrivateRoute element={<Testing />} />} />
    </Routes>
);

export default AppRoutes;
