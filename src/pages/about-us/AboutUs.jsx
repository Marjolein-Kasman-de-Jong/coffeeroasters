// Sections
import Hero from "../../sections/hero/Hero";
import Commitment from "../../sections/commitment/Commitment";
import Quality from "../../sections/quality/Quality";
import Headquarters from "../../sections/headquarters/Headquarters";

// Styles
import "./about-us.css";

export default function AboutUs() {
  return (
    <main>
        <Hero />
        <Commitment />
        <Quality />
        <Headquarters />        
    </main>
  )
}