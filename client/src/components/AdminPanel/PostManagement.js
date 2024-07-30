import React from 'react';
import DataManagement from '../DataManagement';

const PostManagement = () => {
    const postFields = [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter title', required: true },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter description', required: true },
        // Add other fields as needed
    ];

    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/posts`}
            columns={[
                { key: 'title', label: 'Title' },
                { key: 'description', label: 'Description' },
                { key: 'createdAt', label: 'Created At' },
                // Add other columns as needed
            ]}
            formFields={postFields}
        />

    );
};

export default PostManagement;
