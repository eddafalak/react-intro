import React, { useState } from "react";

interface HeaderProps {
  title: string;
  menuItems: string[];
}

function Header({ title, menuItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Track hovered item

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item); // Set hovered item when mouse enters
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset hovered item when mouse leaves
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    position: "relative",
    zIndex: 10,
  };

  const titleStyle: React.CSSProperties = {
    color: "white",
  };

  const menuStyle: React.CSSProperties = {
    display: isOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    zIndex: 5,
    flexDirection: "column",
  };

  const ulStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const menuItemStyle = (item: string): React.CSSProperties => ({
    padding: "15px",
    fontSize: "30px",
    color: hoveredItem === item ? "#f39c12" : "white", // Change color on hover
    textDecoration: "none",
    cursor: "pointer", // Make it look clickable
  });

  const hamburgerStyle: React.CSSProperties = {
    fontSize: "30px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "white",
    outline: "none",
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "30px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <button onClick={toggleMenu} style={hamburgerStyle}>
        &#9776;
      </button>

      <nav style={menuStyle}>
        <button onClick={toggleMenu} style={closeButtonStyle}>
          &#10005;
        </button>

        <ul style={ulStyle}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item)} // Hover start
              onMouseLeave={handleMouseLeave} // Hover end
            >
              <a href={`#${item.toLowerCase()}`} style={menuItemStyle(item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
