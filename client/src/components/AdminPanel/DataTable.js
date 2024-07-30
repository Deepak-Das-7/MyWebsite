import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ data, columns, onEdit, onDelete }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            {columns.map(col => (
                                <td key={col.key}>{item[col.key]}</td>
                            ))}
                            <td>
                                <Button variant="info" onClick={() => onEdit(item)}>Edit</Button>
                                <Button variant="danger" onClick={() => onDelete(item._id)} className="ml-2">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;
