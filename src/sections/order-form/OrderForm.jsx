// Components
import OrderFormSection from "../../components/order-form-section/OrderFormSection";

// Constants
import sectionOrderFormContent from "../../constants/sectionOrderFormContent";

// Styles
import "./order-form.css";

export default function OrderForm() {
  return (
    <section className="order">
      <nav className="order-navigation">
        Order navigation
      </nav>
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