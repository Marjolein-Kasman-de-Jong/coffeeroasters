// Components
import Card from "../../components/card/Card";

// Constants
import sectionHeadquartersContent from "../../constants/sectionHeadquartersContent";

// Styles
import "./headquarters.css";

export default function Headquarters() {
  return (
    <section className="headquarters">
      <h2 className="heading-section-headquarters">
        Our headquarters
      </h2>
      <div className="cards-wrapper">
        {
          sectionHeadquartersContent.map((item) => {
            return <Card
              key={item.title}
              type="headquarter"
              item={item}
            />
          })
        }
      </div>
    </section>
  )
}