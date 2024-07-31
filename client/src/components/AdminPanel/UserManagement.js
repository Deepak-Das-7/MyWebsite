import React from 'react';
import DataManagement from '../DataManagement';

const userFields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter username', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', required: true },
    { name: 'password', label: 'Password', type: 'text', placeholder: 'Enter password', required: true },
    { name: 'image', label: 'ProfilePicture', type: 'image', placeholder: 'Enter profilePicture', required: true },
    { name: 'bio', label: 'Bio', type: 'text', placeholder: 'Enter text', required: true },
    // Add other fields as needed
];

const UserManagement = () => {
    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/users`}
            columns={[
                { key: 'username', label: 'Username' },
                { key: 'email', label: 'Email' },
                { key: 'password', label: 'Password' },
                // Add other columns as needed
            ]}
            formFields={userFields}
        />
    );
};

export default UserManagement;
