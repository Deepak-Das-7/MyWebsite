import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/Navbar/Nav';
import AppRoutes from './pages/Routes';

const App = () => (
    <Router>
        <NavbarComponent />
        <AppRoutes />
    </Router>
);

export default App;
