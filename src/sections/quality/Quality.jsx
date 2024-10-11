// Styles
import "./quality.css";

export default function Quality() {
  return (
    <section className="quality">
      <article>
        <picture>
          <source media="(min-width: 1440px)" srcSet="/about/desktop/image-quality.jpg" />
          <source media="(min-width: 768px)" srcSet="/about/tablet/image-quality.jpg" />
          <img src="/about/mobile/image-quality.jpg" alt="Cappucino" />
        </picture>
        <div className="text-wrapper">
          <h2 className="heading-section-quality">
            Uncompromising quality
          </h2>
          <p className="paragraph-1 light-cream">
            Although we work with grows who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>
        </div>
      </article>
    </section>
  )
}