import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Styles
import "./order-form-option.css";

export default function OrderFormOption({ section, options, option }) {
    const { order, updateOrder } = useContext(OrderContext);
    const { optionTitle, optionDescription } = options[option];
    const isSelected = order[section][option];

    const handleClick = (event) => {
        event.preventDefault();

        const category = section;
        const selectedOption = event.currentTarget.id;

        updateOrder(category, selectedOption);
    }

    return (
        <label
            htmlFor={`${option}-radio`}
            className={`order-form-option ${section} ${isSelected ? "selected" : ""}`}
            id={option}
            onClick={handleClick}
        >
            <input
                type="radio"
                name={`${section}-option`}
                value={optionTitle}
                id={`${option}-radio`}
            />
            <h3 className="heading-option">
                {optionTitle}
            </h3>
            <p className="regular-paragraph">
                {optionDescription}
            </p>
        </label>
    )
}