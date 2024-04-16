import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#040670',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none'
    };

    const hoverStyle = {
        backgroundColor: '#45a049'
    };

    return (
        <div style={{ width: '200px', height: '100vh', background: '#f0f0f0', padding: '20px' }}>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src="/crkLogo.jpeg" alt="Logo" style={{ width: '100%', maxWidth: '150px' }} />
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                    <Link to="/" style={buttonStyle}>Home</Link>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Link to="/pulls" style={buttonStyle}>Pulls</Link>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Link to="/guild-battles" style={buttonStyle}>Guild Battles</Link>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Link to="/ranker" style={buttonStyle}>Ranker</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
