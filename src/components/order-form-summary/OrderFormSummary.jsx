import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Helpers
import getContent from "../../helpers/getContent";

// Styles
import "./order-form-summary.css";

export default function OrderFormSummary() {
    const { getOrderSummary } = useContext(OrderContext);
    const orderSummary = getOrderSummary();

    const sort = getContent("sort", orderSummary);
    const type = getContent("type", orderSummary);
    const amount = getContent("amount", orderSummary);
    const grind = getContent("grind", orderSummary);
    const interval = getContent("interval", orderSummary);

    return (
        <section className="order-form-summary">
            <article>
                <h2>Order Summary</h2>
                <p>
                    {
                        `“I drink my coffee as ${sort}, with a ${type} type of bean. ${amount} ground ala ${grind}, sent to me ${interval}.”`
                    }
                </p>
            </article>
        </section>
    )
}