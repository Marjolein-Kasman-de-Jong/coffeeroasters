// Styles
import "./card.css";

export default function Card({ type, item }) {
    const { title, description, image } = item;

    return (
        <article className={`card ${type}`}>
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