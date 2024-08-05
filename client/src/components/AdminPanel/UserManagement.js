import React from 'react';
import DataManagement from '../DataManagement';

const userFields = [
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', required: true },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password', required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', placeholder: 'Enter date of birth', required: false },
    { name: 'class', label: 'Class', type: 'text', placeholder: 'Enter class ID', required: false },
    { name: 'enrollments', label: 'Enrollments', type: 'text', placeholder: 'Enter enrollment IDs', required: false, multiple: true }
];


const UserManagement = () => {
    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/students`}
            columns={[
                { key: 'firstName', label: 'FirstName' },
                { key: 'email', label: 'Email' },
                { key: 'class', label: 'Class' },
                // Add other columns as needed
            ]}
            formFields={userFields}
        />
    );
};

export default UserManagement;
