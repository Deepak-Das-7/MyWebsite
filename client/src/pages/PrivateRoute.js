import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    const auth = token !== null;

    if (!auth) {
        return <Navigate to='/login' />;
    }

    return element;
};

export default PrivateRoute;
