import { useState, useEffect } from "react";

// Hooks
import useScreenWidth from "../../hooks/useScreenWidth";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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

    const { title, description, image, number } = item;

    return (
        <article
            ref={ref}
            className={`card ${type} ${isIntersecting ? 'show' : ''}`}
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
                <p className="regular-paragraph">
                    {description}
                </p>
            </div>
        </article>
    )
}