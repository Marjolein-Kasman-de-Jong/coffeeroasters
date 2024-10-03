import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Button from "../../components/button/Button";

// Constants
import sectionHeroContent from "../../constants/sectionHeroContent";

// Styles
import "./hero.css";

export default function Hero() {
  // Get location
  const location = useLocation().pathname;

  // Get hero content
  const { heading, paragraph, image, height } = sectionHeroContent[location];

  // Set background image based on screen width
  const [backgroundImage, setBackgroundImage] = useState(image.small);

  // Set hero height based on screen width
  const [heroHeight, setHeroHeight] = useState(height.small);

  // Handle screen width change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setBackgroundImage(image.large);
        setHeroHeight(height.large);
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(image.medium);
        setHeroHeight(height.medium);
      } else {
        setBackgroundImage(image.small);
        setHeroHeight(height.small);
      }
    }

    // Initial setting
    handleResize();

    // Resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: heroHeight
      }}
    >
      <article>
        <h1 className={(location === "/" || location === "/subscribe") ? "heading-1" : "heading-2"}>
          {heading}
        </h1>
        <p className="paragraph-1">
          {paragraph}
        </p>
      </article>
      {
        location === "/" &&
        <Button>
          Create your plan
        </Button>
      }
    </section>
  )
}