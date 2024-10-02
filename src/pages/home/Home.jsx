// Sections
import HomeCollection from "../../sections/home-collection/HomeCollection";
import HomeUsps from "../../sections/home-usps/HomeUsps";
import HomeBusinessProcess from "../../sections/home-business-process/HomeBusinessProcess";

// Styles
import "./home.css";

export default function Home() {
    return (
        <main>
            <HomeCollection />
            <HomeUsps />
            <HomeBusinessProcess />
        </main>
    )
}