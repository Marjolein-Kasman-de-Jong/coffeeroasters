// Sections
import AboutUsHero from "../../sections/about-us-hero/AboutUsHero";
import AboutUsCommitment from "../../sections/about-us-commitment/AboutUsCommitment";
import AboutUsQuality from "../../sections/about-us-quality/AboutUsQuality";
import AboutUsHeadquarters from "../../sections/about-us-headquarters/AboutUsHeadquarters";

// Styles
import "./about-us.css";

export default function AboutUs() {
  return (
    <main>
        <AboutUsHero />
        <AboutUsCommitment />
        <AboutUsQuality />
        <AboutUsHeadquarters />        
    </main>
  )
}