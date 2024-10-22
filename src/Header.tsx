import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const headerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        position: 'relative',
        zIndex: 10, // Ensure the header stays above the menu
    };

    const titleStyle: React.CSSProperties = {
        color: 'white',
    };

    const menuStyle: React.CSSProperties = {
        display: isOpen ? 'flex' : 'none', // Use flex to center content
        justifyContent: 'center',          // Center horizontally
        alignItems: 'center',              // Center vertically
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'fixed' as 'fixed',      // Fixed position for full screen
        top: 0,
        left: 0,
        width: '100vw',                   // Full width
        height: '100vh',                  // Full height
        textAlign: 'center',
        zIndex: 5,                        // Make sure the menu is on top of the header
        flexDirection: 'column',          // Align content in column
    };

    const ulStyle: React.CSSProperties = {
        listStyleType: 'none',            // Removes bullets
        padding: 0,                       // Removes default padding
        margin: 0,                        // Removes default margin
    };

    const menuItemStyle: React.CSSProperties = {
        padding: '15px',
        fontSize: '30px',
        color: 'white',
        textDecoration: 'none',
    };

    const hamburgerStyle: React.CSSProperties = {
        fontSize: '30px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        outline: 'none',
    };

    const closeButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '30px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <header style={headerStyle}>
            {/* Title */}
            <h1 style={titleStyle}>Edda Falak</h1>

            {/* Hamburger menu on the right */}
            <button onClick={toggleMenu} style={hamburgerStyle}>
                &#9776;
            </button>

            {/* Fullscreen menu (ul) */}
            <nav style={menuStyle}>
                {/* Close button */}
                <button onClick={toggleMenu} style={closeButtonStyle}>
                    &#10005; {/* This is the "X" icon for closing */}
                </button>

                <ul style={ulStyle}>
                    <li><a href="#home" style={menuItemStyle}>Home</a></li>
                    <li><a href="#about" style={menuItemStyle}>About</a></li>
                    <li><a href="#contact" style={menuItemStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;