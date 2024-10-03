// Images
import open from "/shared/mobile/icon-hamburger.svg";
import close from "/shared/mobile/icon-close.svg";

// Styles
import "./hamburger-menu-icon.css";

export default function HamburgerMenuIcon({ isOpen, toggleIsOpen }) {
    const toggleMenu = () => {
        toggleIsOpen(!isOpen);
    }

    return (
        <div
            className="hamburger-menu-icon"
            onClick={toggleMenu}
        >
            <img
                src={isOpen ? close : open}
                alt="Hamburger menu icon"
            />
        </div>
    )
}