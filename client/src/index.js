import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from './userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SessionProvider>
            <App />
        </SessionProvider>
    </React.StrictMode>
);
