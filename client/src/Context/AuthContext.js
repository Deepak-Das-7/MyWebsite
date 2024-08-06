import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Use jwtDecode directly

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                setAuth(token);
                try {
                    const decodedToken = jwtDecode(token);
                    setUserDetails(decodedToken);
                } catch (error) {
                    console.error('Failed to decode token:', error);
                }
            }
            setLoading(false);
        };

        fetchAuth();
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setAuth(token);
        try {
            const decodedToken = jwtDecode(token);
            setUserDetails(decodedToken);
        } catch (error) {
            console.error('Failed to decode token:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
        setUserDetails(null);
    };

    return (
        <AuthContext.Provider value={{ auth, userDetails, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
