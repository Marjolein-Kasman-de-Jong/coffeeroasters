// Styles
import "./order-form-nav.css";

function scrollToSection(id, offset) {
    const element = document.getElementById(id);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }
}

export default function OrderFormNav() {
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