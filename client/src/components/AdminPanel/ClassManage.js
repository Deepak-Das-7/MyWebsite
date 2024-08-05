import React from 'react';
import DataManagement from '../DataManagement';

const ClassManage = () => {
    const postFields = [
        { name: 'name', label: 'Class', type: 'text', placeholder: 'Enter class', required: true },
        { name: 'students', label: 'Students', type: 'object', placeholder: 'Enter students', required: true },
        { name: 'teachers', label: 'Teachers', type: 'object', placeholder: 'Enter teachers', required: false },
        // Add other fields as needed
    ];

    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/classes`}
            columns={[
                { key: 'name', label: 'Class' },
                { key: 'students', label: 'Students' },
                { key: 'teachers', label: 'Teachers' },
                // { key: 'dueDate', label: 'DueDate' },
                // { key: 'tags', label: 'Tags' },
            ]}
            formFields={postFields}
        />
    );
};

export default ClassManage;
