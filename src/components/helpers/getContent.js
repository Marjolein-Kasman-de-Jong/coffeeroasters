// Constants
import sectionOrderFormContent from "../../constants/sectionOrderFormContent";

const getContent = (option, orderSummary) => {
    if (!orderSummary) return;

    const { chosenAmount, chosenGrind, chosenInterval, chosenSort, chosenType } = orderSummary;

    const findObject = sectionOrderFormContent.find(item => item.section === option);

    const optionMapping = {
        sort: chosenSort,
        type: chosenType,
        amount: chosenAmount,
        grind: chosenGrind,
        interval: chosenInterval,
    }

    const chosen = optionMapping[option];

    return chosen !== undefined ? findObject.options[chosen].optionTitle : undefined;
}

export default getContent;