import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Components
import OrderFormSummary from "../order-form-summary/OrderFormSummary";
import Button from "../button/Button";

// Hooks
import useScreenWidth from "../../hooks/useScreenWidth";

// Helpers
import convertToCurrency from "../../helpers/convertToCurrency";

// Styles
import "./modal.css";

export default function Modal({ isOpen, toggleIsOpen }) {
    const screenWidth = useScreenWidth();

    const { getPrice } = useContext(OrderContext);
    const price = convertToCurrency(getPrice());

    if (!isOpen) return null;

    return (
        <>
            <div className="overlay"></div>
            <article className="modal">
                <header>
                    <h2 className="heading-order-summary">Order Summary</h2>
                </header>
                <OrderFormSummary />
                <p className="regular-paragraph">
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                </p>
                {
                    screenWidth ?
                        <Button toggleIsOpen={toggleIsOpen}>
                            Checkout - {price} / mo
                        </Button>
                        :
                        <div className="checkout">
                            <p>
                                {`${price} / mo`}
                            </p>
                            <Button toggleIsOpen={toggleIsOpen}>
                                Checkout
                            </Button>
                        </div>
                }
            </article>
        </>
    )
}