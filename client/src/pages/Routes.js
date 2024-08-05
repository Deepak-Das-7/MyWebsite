import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';
import AdminPanel from './AdminPanel';
import LoginPage from './login/LoginPage';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
    </Routes>
);

export default AppRoutes;
