import { createContext, useState } from "react";

export const OrderContext = createContext(null);

function OrderContextProvider({ children }) {
    const [order, setOrder] = useState({
        sort: {
            capsule: true,
            filter: false,
            espresso: false
        },
        type: {
            singleOrigin: true,
            decaf: false,
            blended: false
        },
        amount: {
            "250g": true,
            "500g": false,
            "1000g": false
        },
        grind: {
            wholebean: true,
            filter: false,
            cafetiere: false
        },
        interval: {
            everyWeek: true,
            everyTwoWeeks: false,
            everyMonth: false
        }
    });

    console.log(order)

    const updateOrder = (category, selectedOption) => {
        // Set only the selected option to true, others to false
        setOrder(prevOrder => ({
            ...prevOrder,
            [category]: Object.keys(prevOrder[category]).reduce((acc, key) => ({
                ...acc,
                [key]: key === selectedOption
                    ? true
                    : false
            }), {})
        }))
    }

    return (
        <OrderContext.Provider value={{ order, updateOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;