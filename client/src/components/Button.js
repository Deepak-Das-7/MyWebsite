import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, onClick, children }) => (
    <Link
        to={to}
        onClick={onClick}
        style={{
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 'bold',
            display: 'inline-block',
            textAlign: 'center',
            padding: "0.5rem"
        }}
    >
        {children}
    </Link>
);

export default Button;
