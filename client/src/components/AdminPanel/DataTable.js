import React, { useState } from 'react';
import { Table, Button, Pagination, Form } from 'react-bootstrap';

const DataTable = ({ data, columns, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const rowsPerPage = 5;

    // Filter data based on search query
    const filteredData = data.filter(item => {
        return columns.some(col => {
            const value = item[col.key];
            return typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase());
        });
    });

    // Calculate the index of the last row and first row of the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    // Generate pagination items
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => setCurrentPage(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    // Function to highlight text
    const highlightText = (text) => {
        if (!searchQuery.trim()) return text;
        const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === searchQuery.toLowerCase() ? (
                <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </Form.Group>
            <Table striped bordered hover size="sm" className="table-sm">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col.key} style={{ padding: '0.3rem' }}>{col.label}</th>
                        ))}
                        <th style={{ padding: '0.3rem' }}>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.length > 0 ? (
                        currentRows.map(item => (
                            <tr key={item._id}>
                                {columns.map(col => (
                                    <td key={col.key} style={{ paddingLeft: '0.3rem', fontSize: 13, minWidth: "7rem" }}>
                                        {typeof item[col.key] === 'string'
                                            ? highlightText(item[col.key])
                                            : typeof item[col.key] === 'object' && item[col.key] !== null
                                                ? item[col.key].username
                                                : item[col.key]}
                                    </td>
                                ))}
                                <td style={{ width: "8rem" }}>
                                    <Button variant="info" size="sm" onClick={() => onEdit(item)}>Edit</Button>
                                    <Button variant="danger" size="sm" onClick={() => onDelete(item._id)} className="ms-2">Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + 1} className="text-center">No data found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Pagination size="sm">
                <Pagination.Prev
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                />
                {paginationItems}
                <Pagination.Next
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default DataTable;
