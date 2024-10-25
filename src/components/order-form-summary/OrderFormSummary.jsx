import { useContext, useEffect, useState, useRef } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Helpers
import getContent from "../../helpers/getContent";

// Styles
import "./order-form-summary.css";

export default function OrderFormSummary() {
    const { getOrderSummary } = useContext(OrderContext);
    const orderSummary = getOrderSummary();
    const [isInsideModal, setIsInsideModal] = useState(false);
    const articleRef = useRef(null);

    const sort = getContent("sort", orderSummary);
    const type = getContent("type", orderSummary);
    const amount = getContent("amount", orderSummary);
    const grind = getContent("grind", orderSummary);
    const interval = getContent("interval", orderSummary);

    useEffect(() => {
        if (articleRef.current && articleRef.current.closest(".modal")) {
            setIsInsideModal(true);
        } else {
            setIsInsideModal(false);
        }
    }, [])

    return (
        <section className="order-form-summary">
            <article ref={articleRef}>
                {!isInsideModal && (
                    <h2 className="heading-order-summary">
                        Order Summary
                    </h2>
                )}
                <p className="order-form-summary-paragraph">
                    {
                        sort === "Capsule" ? 
                            "“I drink my coffee using " 
                            : 
                            "“I drink my coffee as "
                    }
                    <span>
                        {sort}
                        {
                            sort === "Capsule" ?
                                "s" 
                                : 
                                ""
                        }
                    </span>
                    {`, with a `}
                    <span>
                        {type}
                    </span>
                    {` type of bean. `}
                    <span>
                        {amount}
                    </span>
                    {` ground ala `}
                    <span>
                        {grind}
                    </span>
                    {`, sent to me `}
                    <span>
                        {interval}
                    </span>
                    {`.”`}
                </p>
            </article>
        </section>
    )
}