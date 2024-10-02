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
                        Home
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        About Us
                    </li>
                    <li className={isMobile ? "heading-4" : "paragraph-2"}>
                        Create Your Plan
                    </li>
                </ul>
            }
        </>
    )
}