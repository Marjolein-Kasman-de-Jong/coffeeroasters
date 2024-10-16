import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Styles
import "./order-form-option.css";

export default function OrderFormOption({section, options, option}) {
    const { updateOrder } = useContext(OrderContext);
    const {optionTitle, optionDescription} = options[option];

    const handleClick = (event) => {
        event.preventDefault();

        const category = event.currentTarget.className;
        const selectedOption = event.currentTarget.id;

        updateOrder(category, selectedOption);
    }

    return (
        <label htmlFor={`${option}-radio`} className={section} id={option} onClick={handleClick}>
            <input type="radio" name={`${section}-option`} value={optionTitle} id={`${option}-radio`} />
            <h3>{optionTitle}</h3>
            <p>{optionDescription}</p>
        </label>
    )
}