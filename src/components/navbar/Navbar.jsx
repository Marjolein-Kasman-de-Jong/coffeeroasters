import { useState } from "react";

// Components
import NavLinks from "../nav-links/NavLinks";
import HamburgerMenuIcon from "../hamburger-menu-icon/HamburgerMenuIcon";

// Styles
import "./navbar.css";

export default function Navbar() {
    const [isOpen, toggleIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <NavLinks 
                isOpen={isOpen} 
                toggleIsOpen={toggleIsOpen} 
            />
            <HamburgerMenuIcon
                isOpen={isOpen} 
                toggleIsOpen={toggleIsOpen}  
            />
        </nav>
    )
}