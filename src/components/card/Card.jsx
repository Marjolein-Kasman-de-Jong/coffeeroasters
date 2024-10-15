import { useState, useEffect } from "react";

// Hooks
import useScreenWidth from "../../hooks/useScreenWidth";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useParentFlexDirection from "../../hooks/useParentFlexDirection";

// Styles
import "./card.css";

export default function Card({ type, item }) {
    // Set threshold based on screen width
    const isMobile = useScreenWidth();
    const [threshold, setThreshold] = useState(0.5);

    useEffect(() => {
        const updateThreshold = () => {
            if (isMobile) {
                setThreshold(0.5);
            } else {
                setThreshold(1);
            }
        };

        // Initial setting
        updateThreshold();

        // Resize listener
        window.addEventListener("resize", updateThreshold);

        // Cleanup
        return () => window.removeEventListener("resize", updateThreshold);
    }, []);

    // Set up IntersectionObserver
    const [ref, isIntersecting] = useIntersectionObserver({
        root: null,
        rootMargin: "100px",
        threshold: threshold,
    });

    // Set animation in containers with flex-direction: column only
    const isColumn = useParentFlexDirection(ref);

    // Destructure item
    let title, description, street, city, zip, phone, image, number;

    if (type === "headquarter") {
        ({ title, description: { street, city, zip, phone }, image, number } = item);
    } else {
        ({ title, description, image, number } = item);
    }

    return (
        <article
            ref={ref}
            className={`card ${type} ${isIntersecting ? 'show' : ''} ${isColumn ? 'animate' : ''}`}
        >
            {
                type === "step" && <div className="dot"></div>
            }
            {
                image ?
                    <img
                        src={image}
                        alt={title}
                    />
                    :
                    <p className="number">
                        {number}
                    </p>
            }
            <div className="text-wrapper">
                <h3 className="heading-card">
                    {title}
                </h3>
                {
                    type === "headquarter" ?
                        <address>
                            {street}<br />
                            {city}<br />
                            {zip}<br />
                            {phone}<br />
                        </address>
                        :
                        <p className="regular-paragraph">
                            {description}
                        </p>
                }
            </div >
        </article >
    )
}