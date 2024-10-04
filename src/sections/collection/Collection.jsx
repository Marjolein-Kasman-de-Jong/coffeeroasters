// Components
import Card from "../../components/card/Card";

// Constants
import sectionCollectionContent from "../../constants/sectionCollectionContent";

// Styles
import "./collection.css";

export default function Collection() {
  return (
    <section className="collection">
      <h2 className="heading-3">
        our collection
      </h2>
      <div className="cards-wrapper">
        {
          sectionCollectionContent.map((item) => {
            return <Card 
              key={item.title} 
              type="product" 
              item={item} 
            />
          })
        }
      </div>
    </section>
  )
}