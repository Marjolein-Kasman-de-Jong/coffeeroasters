// Hooks
import useScrollToSection from "../../hooks/useScrollToSection";

// Styles
import "./order-form-nav-item.css";

export default function OrderFormNavItem({ index, item, amountOfItems }) {
    const scrollToSection = useScrollToSection();
    const { section, menuItem } = item;

    return (
        <>
            <li
                className="nav-item-order-form"
                onClick={() => scrollToSection(section, 110)}
            >
                {menuItem}
            </li>
            {
                index < amountOfItems - 1 && <hr />
            }
        </>
    )
}