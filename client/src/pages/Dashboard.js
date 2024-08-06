import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/Navbar/Nav';
import Courses from '../components/Dashboard/Courses';

const Dashboard = () => {
    return (
        <div>
            <NavbarComponent />
            <Courses />
        </div>
    );
};

export default Dashboard;
