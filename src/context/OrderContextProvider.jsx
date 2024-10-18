import { createContext, useState } from "react";

export const OrderContext = createContext(null);

function OrderContextProvider({ children }) {
    const [order, setOrder] = useState({
        sort: {
            capsule: true,
            sfilter: false,
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
            gfilter: false,
            cafetiere: false
        },
        interval: {
            everyWeek: true,
            everyTwoWeeks: false,
            everyMonth: false
        }
    });

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

    const getOrderSummary = () => {
        const { amount, grind, interval, sort, type } = order;

        // Find chosen option
        const chosenOption = (object, value) => {
            return Object.entries(object).find(([key, val]) => val === value)?.[0];
        }

        // Create object containing chosen options
        const chosenOptions = {
            chosenAmount: chosenOption(amount, true),
            chosenGrind: chosenOption(grind, true),
            chosenInterval: chosenOption(interval, true),
            chosenSort: chosenOption(sort, true),
            chosenType: chosenOption(type, true)
        }

        return chosenOptions;
    }

    return (
        <OrderContext.Provider value={{ order, updateOrder, getOrderSummary }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;