import { useState } from "react";

// Components
import NavLinks from "../nav-links/NavLinks";

// Images
import open from "/shared/mobile/icon-hamburger.svg";
import close from "/shared/mobile/icon-close.svg";

// Styles
import "./navbar.css";

export default function Navbar() {
    const [isOpen, toggleIsOpen] = useState(false);

    const toggleMenu = () => {
        toggleIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <NavLinks 
                isOpen={isOpen} 
                toggleIsOpen={toggleIsOpen} 
            />
            <div 
                className="hamburger-menu-icon" 
                onClick={toggleMenu}
            >
                <img 
                    src={isOpen ? close : open} 
                    alt="Hamburger menu icon" 
                />
            </div>
        </nav>
    )
}