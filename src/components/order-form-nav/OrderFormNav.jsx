// Components
import OrderFormNavItem from "../order-form-nav-item/OrderFormNavItem";

// Constants
import sectionOrderFormContent from "../../constants/sectionOrderFormContent";

// Styles
import "./order-form-nav.css";

export default function OrderFormNav() {
    const amountOfItems = sectionOrderFormContent.length;

    return (
        <nav className="order-form-nav">
            <ol>
                {
                    sectionOrderFormContent.map((item, index) => {
                        return (
                            <OrderFormNavItem 
                                key={index}
                                index={index} 
                                item={item}
                                amountOfItems={amountOfItems}  
                            />
                        )
                    })
                }
            </ol>
        </nav>
    )
}