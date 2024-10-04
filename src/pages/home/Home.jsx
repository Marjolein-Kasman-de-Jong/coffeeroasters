// Sections
import Hero from "../../sections/hero/Hero";
import Collection from "../../sections/collection/Collection";
import Usps from "../../sections/usps/Usps";
import BusinessProcess from "../../sections/business-process/BusinessProcess";

// Styles
import "./home.css";

export default function Home() {
    return (
        <main className="home">
            <Hero />
            <Collection />
            <Usps />
            <BusinessProcess />
        </main>
    )
}