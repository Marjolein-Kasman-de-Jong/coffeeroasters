import { Link } from "react-router-dom";

// Hooks
import useScreenWidth from "../../hooks/useScreenWidth";

// Styles
import "./nav-links.css";

export default function NavLinks({ isOpen, toggleIsOpen }) {
    const isMobile = useScreenWidth();

    const handleClick = () => {
        toggleIsOpen(false);
    }

    return (
        <>
            {
                <ul className={`nav-links ${isOpen || !isMobile ? "open" : ""}`}>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link 
                            to="/" 
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link 
                            to="/about-us" 
                            onClick={handleClick}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link 
                            to="/subscribe" 
                            onClick={handleClick}
                        >
                            Create Your Plan
                        </Link>
                    </li>
                </ul>
            }
        </>
    )
}