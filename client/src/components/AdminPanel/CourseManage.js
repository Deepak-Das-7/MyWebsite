// src/components/CourseManagement.js

import React from 'react';
import DataManagement from '../DataManagement';

const courseFields = [
    { name: 'name', label: 'Course Name', type: 'text', placeholder: 'Enter course name', required: true },
    { name: 'description', label: 'Description', type: 'text', placeholder: 'Enter course description', required: false },
    { name: 'duration', label: 'Duration', type: 'text', placeholder: 'Enter course duration', required: false },
    { name: 'subjects', label: 'Subjects', type: 'object', placeholder: 'Enter subject IDs', required: false, multiple: true },
    { name: 'students', label: 'Students', type: 'object', placeholder: 'Enter student IDs', required: false, multiple: true }
];

const CourseManagement = () => {
    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/courses`}
            columns={[
                { key: 'name', label: 'Course Name' },
                { key: 'description', label: 'Description' },
                { key: 'duration', label: 'Duration' },
                { key: 'subjects', label: 'Subjects' },
                { key: 'students', label: 'Students' },
                // Add other columns as needed
            ]}
            formFields={courseFields}
        />
    );
};

export default CourseManagement;
