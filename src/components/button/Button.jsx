import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ children }) {
    const navigate = useNavigate();

    const navigateToSubscribe = () => {
        navigate("/subscribe");
    }

    return (
            <button 
                className="button-1" 
                onClick={navigateToSubscribe}
            >
                {children}
            </button>
    )
}