// Components
import OrderFormSummary from "../order-form-summary/OrderFormSummary";

// Styles
import "./modal.css";

export default function Modal({ isOpen, toggleIsOpen }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="overlay"></div>
            <article className="modal">
                <header>
                    <h2>Order Summary</h2>
                </header>
                <OrderFormSummary />
                <p>
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                </p>
                <button onClick={() => toggleIsOpen(false)}>close</button>
            </article>
        </>
    )
}