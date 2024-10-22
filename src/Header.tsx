import React, { useState } from 'react';

// Define props type for TypeScript
interface HeaderProps {
    title: string;
    menuItems: string[];
}

function Header({ title, menuItems }: HeaderProps) {
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
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        zIndex: 5,
        flexDirection: 'column',
    };

    const ulStyle: React.CSSProperties = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
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
            {/* Use the title prop */}
            <h1 style={titleStyle}>{title}</h1>

            {/* Hamburger menu on the right */}
            <button onClick={toggleMenu} style={hamburgerStyle}>
                &#9776;
            </button>

            {/* Fullscreen menu (ul) */}
            <nav style={menuStyle}>
                {/* Close button */}
                <button onClick={toggleMenu} style={closeButtonStyle}>
                    &#10005;
                </button>

                <ul style={ulStyle}>
                    {/* Render menuItems dynamically */}
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.toLowerCase()}`} style={menuItemStyle}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
