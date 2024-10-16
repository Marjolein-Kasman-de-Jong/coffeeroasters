const sectionOrderFormContent = [
    {
        section: "sort",
        title: "How do you drink your coffee?",
        options: {
            capsule: {
                optionTitle: "Capsule",
                optionDescription: "Compatible with Nespresso systems and similar brewers"
            },
            filter: {
                optionTitle: "Filter",
                optionDescription: "For pour over or drip methods like Aeropress, Chemex, and V60"
            },
            espresso: {
                optionTitle: "Espresso",
                optionDescription: "Dense and finely ground beans for an intense, flavorful experience"
            }
        }
    },
    {
        section: "type",
        title: "What type of coffee?",
        options: {
            singleOrigin: {
                optionTitle: "Single Origin",
                optionDescription: "Distinct, high quality coffee from a specific family-owned farm"
            },
            decaf: {
                optionTitle: "Decaf",
                optionDescription: "Just like regular coffee, except the caffeine has been removed"
            },
            blended: {
                optionTitle: "Blended",
                optionDescription: "Combination of two or three dark roasted beans of organic coffees"
            }
        }
    },
    {
        section: "amount",
        title: "How much would you like?",
        options: {
            "250g": {
                optionTitle: "250g",
                optionDescription: "Perfect for the solo drinker. Yields about 12 delicious cups."
            },
            "500g": {
                optionTitle: "500g",
                optionDescription: "Perfect option for a couple. Yields about 40 delectable cups."
            },
            "1000g": {
                optionTitle: "1000g",
                optionDescription: "Perfect for offices and events. Yields about 90 delightful cups."
            }
        }
    },
    {
        section: "grind",
        title: "Want us to grind them?",
        options: {
            wholebean: {
                optionTitle: "Wholebean",
                optionDescription: "Best choice if you cherish the full sensory experience"
            },
            filter: {
                optionTitle: "Filter",
                optionDescription: "For drip or pour-over coffee methods such as V60 or Aeropress"
            },
            cafetiere: {
                optionTitle: "Cafetiére",
                optionDescription: "Course ground beans specially suited for french press coffee"
            }
        }
    },
    {
        section: "interval",
        title: "How often should we deliver?",
        options: {
            everyWeek: {
                optionTitle: "Every week",
                optionDescription: "$7.20 per shipment. Includes free first-class shipping."
            },
            everyTwoWeeks: {
                optionTitle: "Every 2 weeks",
                optionDescription: "$9.60 per shipment. Includes free priority shipping."
            },
            everyMonth: {
                optionTitle: "Every month",
                optionDescription: "$12.00 per shipment. Includes free priority shipping."
            }
        }
    },
]

export default sectionOrderFormContent;