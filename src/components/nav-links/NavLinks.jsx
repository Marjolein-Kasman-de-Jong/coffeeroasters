import { Link } from "react-router-dom";

// Hooks
import useScreenWidth from "../../hooks/useScreenWidth";

// Styles
import "./nav-links.css";

export default function NavLinks({ isOpen }) {
    const isMobile = useScreenWidth();

    return (
        <>
            {
                <ul className={`nav-links ${isOpen || !isMobile ? "open" : ""}`}>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link to="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        <Link to="/subscribe">
                            Create Your Plan
                        </Link>
                    </li>
                </ul>
            }
        </>
    )
}