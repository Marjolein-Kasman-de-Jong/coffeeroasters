import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ children }) {
    const navigate = useNavigate();

    const navigateToSubscribe = () => {
        navigate("/subscribe");
    }

    const createPlan = (event) => {
        event.preventDefault();
        console.log("Show modal");    
    }

    return (
            <button 
                className="button-1 light-cream" 
                onClick={children === "Create your plan" ? navigateToSubscribe : createPlan}
            >
                {children}
            </button>
    )
}