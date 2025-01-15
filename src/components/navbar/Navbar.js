import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    const logo = require(`./assets/images/buzzBridgeLogo.jpeg`);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logoAnchor">
                    <img
                        src={logo}
                        alt="BuzzBridge Logo"
                        className="logo"
                    />
                </a>
            </div>
            <div className="navbar-right">
                {/* <ul className="nav-links" > */}
                <ul className={`nav-links ${menuOpen ? "show" : ""}`} >
                    <li>
                        <button onClick={() => console.log("products")}>Products</button>
                    </li>
                    <li>
                        <button onClick={() => console.log("aboutUs")}>About Us</button>
                    </li>
                    <li>
                        <button onClick={() => console.log("contact")}>Contact</button>
                    </li>
                </ul>
                {/* Hamburger button for smaller screens */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;