// Images
import home_small from "../../public/home/mobile/image-hero-coffeepress.jpg";
import home_medium from "../../public/home/tablet/image-hero-coffeepress.jpg";
import home_large from "../../public/home/desktop/image-hero-coffeepress.jpg";
import aboutUs_small from "../../public/about/mobile/image-hero-whitecup.jpg";
import aboutUs_medium from "../../public/about/tablet/image-hero-whitecup.jpg";
import aboutUs_large from "../../public/about/desktop/image-hero-whitecup.jpg";
import subscribe_small from "../../public/plan/mobile/image-hero-blackcup.jpg";
import subscribe_medium from "../../public/plan/tablet/image-hero-blackcup.jpg";
import subscribe_large from "../../public/plan/desktop/image-hero-blackcup.jpg";

const sectionHeroContent = {
    "/": {
        heading: "Great coffee made simple.",
        paragraph: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
        image: {
            small: home_small,
            medium: home_medium,
            large: home_large
        },
        height: {
            small: "500px",
            medium: "500px",
            large: "600px"
        }
    },
    "/about-us": {
        heading: "About Us",
        paragraph: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
        image: {
            small: aboutUs_small,
            medium: aboutUs_medium,
            large: aboutUs_large
        },
        height: {
            small: "400px",
            medium: "400px",
            large: "450px"
        }
    },
    "/subscribe": {
        heading: "Create a plan",
        paragraph: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
        image: {
            small: subscribe_small,
            medium: subscribe_medium,
            large: subscribe_large
        },
        height: {
            small: "400px",
            medium: "400px",
            large: "450px"
        }
    }
}

export default sectionHeroContent;