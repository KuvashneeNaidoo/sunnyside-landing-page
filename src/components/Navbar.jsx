import { useState } from "react";
import "../css/Navbar.css";

// Functional component for displaying the navigation menu
const Navbar = () => {
  // State to track whether the menu is open or closed (for the hamburger menu)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1 className="heading">
          <a href="/">sunnyside</a>
        </h1>
      </div>

      {/* Hamburger menu button that toggles the state of the menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navbar links that toggle the 'open' class based on the state of isOpen */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
