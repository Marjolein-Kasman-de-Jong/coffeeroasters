import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ children, toggleIsOpen }) {
    const navigate = useNavigate();

    const navigateToSubscribe = () => {
        navigate("/subscribe");
    }

    const createPlan = (event) => {
        event.preventDefault();
        toggleIsOpen(true);
    }

    const closeModal = () => {
        toggleIsOpen(false);
    }

    let onClick;

    if (children === "Create your plan") {
        onClick = navigateToSubscribe;
    } else if (children === "Create my plan!") {
        onClick = createPlan;
    } else if (children === "Checkout" || children[0].startsWith("Checkout")) {
        onClick = closeModal;
    }

    return (
        <button
            className="button-1 light-cream"
            onClick={onClick}
        >
            {children}
        </button>
    )
}