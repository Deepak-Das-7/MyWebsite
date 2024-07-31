import React from 'react';
import DataManagement from '../DataManagement';

const PostManagement = () => {
    const postFields = [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter title', required: true },
        { name: 'content', label: 'Content', type: 'textarea', placeholder: 'Enter content', required: true },
        { name: 'author', label: 'Author', type: 'text', placeholder: 'Enter author', required: true },
        { name: 'image', label: 'Image', type: 'image', placeholder: 'Enter image', required: true },
        // { name: 'tags', label: 'Tags', type: 'text', placeholder: 'Enter tags', required: false },
        // Add other fields as needed
    ];

    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/posts`}
            columns={[
                { key: 'title', label: 'Title' },
                { key: 'content', label: 'Content' },
                { key: 'author', label: 'Author' },
                // { key: 'image', label: 'Image' },
                // { key: 'tags', label: 'Tags' },
            ]}
            formFields={postFields}
        />
    );
};

export default PostManagement;
