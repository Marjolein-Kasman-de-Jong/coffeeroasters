// Components
import OrderFormNav from "../../components/order-form-nav/OrderFormNav";
import OrderFormSection from "../../components/order-form-section/OrderFormSection";

// Constants
import sectionOrderFormContent from "../../constants/sectionOrderFormContent";

// Styles
import "./order-form.css";

export default function OrderForm() {
  return (
    <section className="order">
      <OrderFormNav />
      <form
        className="order-form"
        id="order-form"
      >
        <div className="order-form-sections-wrapper">
          {
            sectionOrderFormContent.map((item, index) => {
              return (
                <OrderFormSection
                  key={index}
                  item={item}
                />
              )
            })
          }
        </div>
        <div className="order-form-summary">
          Summary
        </div>
        <button>
          Submit button
        </button>
      </form>
    </section>
  )
}