import { useState, useEffect } from "react";

// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// Styles
import "./card.css";

export default function Card({ type, item }) {
    // Set threshold based on screen width
    const [threshold, setThreshold] = useState(0.5);

    useEffect(() => {
        const updateThreshold = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
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

    const { title, description, image } = item;

    return (
        <article
            ref={ref}
            className={`card ${type} ${isIntersecting ? 'show' : ''}`}
        >
            <img
                src={image}
                alt={title}
            />
            <div className="text-wrapper">
                <h3 className="heading-4">
                    {title}
                </h3>
                <p className="paragraph-1">
                    {description}
                </p>
            </div>
        </article>
    )
}