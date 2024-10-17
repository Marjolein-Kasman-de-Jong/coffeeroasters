// Hooks
import useScrollToSection from "../../hooks/useScrollToSection";

// Styles
import "./order-form-nav.css";

export default function OrderFormNav() {
    const scrollToSection = useScrollToSection();

    return (
        <nav className="order-form-nav">
            <ol>
                <li className="nav-item-order-form" onClick={() => scrollToSection("sort", 110)}>
                    Preferences
                </li>
                <hr />
                <li className="nav-item-order-form" onClick={() => scrollToSection("type", 110)}>
                    Bean Type
                </li>
                <hr />
                <li className="nav-item-order-form" onClick={() => scrollToSection("amount", 110)}>
                    Quantity
                </li>
                <hr />
                <li className="nav-item-order-form" onClick={() => scrollToSection("grind", 110)}>
                    Grind Option
                </li>
                <hr />
                <li className="nav-item-order-form" onClick={() => scrollToSection("interval", 110)}>
                    Deliveries
                </li>
            </ol>
        </nav>
    )
}