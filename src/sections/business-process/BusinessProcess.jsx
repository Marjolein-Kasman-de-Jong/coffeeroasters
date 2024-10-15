import { useLocation } from "react-router-dom";

// Components
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

// Constants
import sectionBusinessProcessContent from "../../constants/sectionBusinessProcessContent";

// Styles
import "./business-process.css";

export default function BusinessProcess() {
  const location = useLocation().pathname;

  return (
    <section className="business-process">
      {
        location === "/" &&
        <h2 className="heading-section-business-process">
          How it works
        </h2>
      }
      <div className="cards-wrapper">
        {
          sectionBusinessProcessContent.map((item) => {
            return <Card
              key={item.title}
              type="step"
              item={item}
            />
          })
        }
      </div>
      {
        location === "/" &&
        <Button>
          Create your plan
        </Button>
      }
    </section>
  )
}