import { useState } from "react";

// Components
import OrderFormNav from "../../components/order-form-nav/OrderFormNav";
import OrderFormSection from "../../components/order-form-section/OrderFormSection";
import OrderFormSummary from "../../components/order-form-summary/OrderFormSummary";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";

// Constants
import sectionOrderFormContent from "../../constants/sectionOrderFormContent";

// Styles
import "./order-form.css";

export default function OrderForm() {
  const [isOpen, toggleIsOpen] = useState(false);
  console.log(isOpen)

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
        <OrderFormSummary />
        <Button toggleIsOpen={toggleIsOpen}>
          Create my plan!
        </Button>
      </form>
      <Modal isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
    </section>
  )
}