// Sections
import Hero from "../../sections/hero/Hero";
import Commitment from "../../sections/commitment/Commitment";
import Quality from "../../sections/quality/Quality";
import Headquarters from "../../sections/headquarters/Headquarters";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

export default function AboutUs() {
  useScrollToTop();
  
  return (
    <main className="about-us">
      <Hero />
      <Commitment />
      <Quality />
      <Headquarters />
    </main>
  )
}