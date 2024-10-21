import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Hooks
import useDetailsToggle from "../../hooks/useDetailsToggle";

// Components
import OrderFormOption from "../order-form-option/OrderFormOption";

// Styles
import "./order-form-section.css";

export default function OrderFormSection({ item }) {
    const { detailsRef, isOpen } = useDetailsToggle();
    const { section, title, options } = item;

    const { order } = useContext(OrderContext);
    const capsuleIsSelected = order["sort"]["capsule"];
    const isDisabled = section === "grind" && capsuleIsSelected === true;

    return (
        <details
            ref={detailsRef}
            className={`order-form-section ${isOpen ? "open" : ""}`}
            id={section}
        >
            <summary
                style={{
                    opacity: isDisabled ? .25 : 'inherit',
                    pointerEvents: isDisabled ? 'none' : 'auto',
                    cursor: isDisabled ? 'not-allowed' : 'pointer'
                }}
            >
                <h2 className="heading-section">
                    {title}
                </h2>
                <svg
                    width="19"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                        fill="#0E8784"
                        fillRule="nonzero"
                    />
                </svg>
            </summary>
            <fieldset
                form="order-form"
                name={section}
            >
                <legend>
                    {section}
                </legend>
                {
                    Object.keys(options).map((option, index) => {
                        return (
                            <OrderFormOption
                                key={index}
                                section={section}
                                options={options}
                                option={option}
                            />
                        )
                    })
                }
            </fieldset>
        </details>
    )
}