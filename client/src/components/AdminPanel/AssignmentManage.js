import React from 'react';
import DataManagement from '../DataManagement';

const AssignmentManage = () => {
    const postFields = [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter title', required: true },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter description', required: true },
        { name: 'dueDate', label: 'DueDate', type: 'date', placeholder: 'Enter dueDate', required: true },
        { name: 'subject', label: 'Subject', type: 'object', placeholder: 'Enter subject', required: true },
        { name: 'class', label: 'Class', type: 'object', placeholder: 'Enter class', required: false },
        { name: 'students', label: 'Students', type: 'text', placeholder: 'Enter tags', required: false },
        // Add other fields as needed
    ];

    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/assignments`}
            columns={[
                { key: 'title', label: 'Title' },
                { key: 'description', label: 'Description' },
                { key: 'class.name', label: 'Class' },
                { key: 'dueDate', label: 'DueDate' },
                // { key: 'tags', label: 'Tags' },
            ]}
            formFields={postFields}
        />
    );
};

export default AssignmentManage;
