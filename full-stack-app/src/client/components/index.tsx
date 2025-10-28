import React from 'react';

export const Header: React.FC = () => {
    return (
        <header>
            <h1>Welcome to the Full Stack App</h1>
        </header>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Full Stack App. All rights reserved.</p>
        </footer>
    );
};

export const Button: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};