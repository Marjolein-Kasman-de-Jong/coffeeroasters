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
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/about-us" 
                            onClick={handleClick}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
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