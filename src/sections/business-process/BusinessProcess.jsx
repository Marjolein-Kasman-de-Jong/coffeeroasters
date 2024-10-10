// Components
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

// Constants
import sectionBusinessProcessContent from "../../constants/sectionBusinessProcessContent";

// Styles
import "./business-process.css";

export default function BusinessProcess() {
  return (
    <section className="business-process">
      <h2 className="heading-4">
        How it works
      </h2>
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
      <Button>
          Create your plan
      </Button>
    </section>
  )
}