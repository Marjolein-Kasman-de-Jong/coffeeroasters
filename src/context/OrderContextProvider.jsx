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

    const getPrice = () => {
        const amount = Object.entries(order.amount).find(([key, value]) => value === true)[0];
        const interval = Object.entries(order.interval).find(([key, value]) => value === true)[0];

        let pricePerShipment;

        if (amount === "250g") {
            switch (interval) {
                case 'everyWeek':
                    pricePerShipment = 7.2;
                    break;
                case 'everyTwoWeeks':
                    pricePerShipment = 9.6;
                    break;
                case 'everyMonth':
                    pricePerShipment = 12;
                    break;
            }
        }

        if (amount === "500g") {
            switch (interval) {
                case 'everyWeek':
                    pricePerShipment = 13;
                    break;
                case 'everyTwoWeeks':
                    pricePerShipment = 17.5;
                    break;
                case 'everyMonth':
                    pricePerShipment = 22;
                    break;
            }
        }

        if (amount === "1000g") {
            switch (interval) {
                case 'everyWeek':
                    pricePerShipment = 22;
                    break;
                case 'everyTwoWeeks':
                    pricePerShipment = 32;
                    break;
                case 'everyMonth':
                    pricePerShipment = 42;
                    break;
            }
        }

        let multiplyer;

        switch (interval) {
            case 'everyWeek':
                multiplyer = 4;
                break;
            case 'everyTwoWeeks':
                multiplyer = 2;
                break;
            case 'everyMonth':
                multiplyer = 1;
                break;
        }

        return pricePerShipment * multiplyer;
    }

    return (
        <OrderContext.Provider value={{ order, updateOrder, getOrderSummary, getPrice }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;