import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import NavbarComponent from '../components/Navbar/Nav';

const Testing = () => {
    const { userDetails, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userDetails) {
        return <div>No user details available</div>;
    }

    return (
        <div>
            <NavbarComponent />
            {/* <h1>Welcome, {userDetails.firstName || 'User'}</h1> */}
            <p>Email: {userDetails.email || 'Not Available'}</p>
            <p>Last Name: {userDetails.lastName || 'Not Available'}</p>
            <p>ID: {userDetails.id || 'Not Available'}</p>
        </div>
    );
};

export default Testing;
