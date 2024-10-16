// Styles
import "./order-form-section.css";

// Components
import OrderFormOption from "../order-form-option/OrderFormOption";

export default function OrderFormSection({ item }) {
    const { section, title, options } = item;
    
    return (
        <details className="order-form-section">
            <summary>
                <h2>
                    {title}
                </h2>
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