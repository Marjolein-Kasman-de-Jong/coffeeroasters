// Components
import Card from "../../components/card/Card";

// Constants
import sectionUspsContent from "../../constants/sectionUspsContent";

// Styles
import "./usps.css";

export default function Usps() {
  return (
    <section className="usps">
      <article>
        <h2 className="heading-2">
          Why choose us?
        </h2>
        <p className="paragraph-1">
        A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>
      </article>
      <div className="cards-wrapper">
        {
          sectionUspsContent.map((item) => {
            return <Card 
              key={item.title} 
              type="usp" 
              item={item} 
            />
          })
        }
      </div>
    </section>
  )
}