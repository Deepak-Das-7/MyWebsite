import React from 'react';
import DataManagement from '../DataManagement';

const tagFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter tag name', required: true },
];

const TagManagement = () => {
    return (
        <DataManagement
            apiUrl={`${process.env.REACT_APP_API_URL}/tags`}
            columns={[
                { key: 'name', label: 'Name' },
            ]}
            formFields={tagFields}
        />
    );
};

export default TagManagement;
