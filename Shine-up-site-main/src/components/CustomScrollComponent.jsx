// CustomScrollComponent.jsx
import React from 'react';
import './customScrollbar.css'; // Adjust the path as necessary

const CustomScrollComponent = ({ children }) => {
    return (
        <div className="scrollable-element" style={{ height: '400px', overflowY: 'scroll' }}>
            {children}
        </div>
    );
};

export default CustomScrollComponent;
