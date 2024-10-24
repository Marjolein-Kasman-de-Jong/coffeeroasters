// Sections
import Hero from "../../sections/hero/Hero";
import Collection from "../../sections/collection/Collection";
import Usps from "../../sections/usps/Usps";
import BusinessProcess from "../../sections/business-process/BusinessProcess";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Styles
import "./home.css";

export default function Home() {
    useScrollToTop();
    
    return (
        <main className="home">
            <Hero />
            <Collection />
            <Usps />
            <BusinessProcess />
        </main>
    )
}