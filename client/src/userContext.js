import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext({
    userId: '',
    setUserId: () => { throw new Error("setUserId function not provided") }
});

export const SessionProvider = ({ children }) => {
    const [userId, setUserId] = useState('');

    const contextValue = {
        userId,
        setUserId,
    };

    return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};
