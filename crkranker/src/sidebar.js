import React from 'react';

function Sidebar() {
    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#040670', 
        color: 'white', // White text
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none'
    };

    const hoverStyle = {
        backgroundColor: '#45a049' // Darker green on hover
    };

    return (
        <div style={{ width: '200px', height: '100vh', background: '#f0f0f0', padding: '20px' }}>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src="/crkLogo.jpeg" alt="Logo" style={{ width: '100%', maxWidth: '150px' }} />
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                    <button style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Home</button>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <button style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Pulls</button>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <button style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Guild Battles</button>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <button style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Ranker</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
