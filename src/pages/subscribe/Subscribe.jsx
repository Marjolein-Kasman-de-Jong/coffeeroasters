// Sections
import Hero from "../../sections/hero/Hero";
import BusinessProcess from "../../sections/business-process/BusinessProcess";
import OrderForm from "../../sections/order-form/OrderForm";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Styles
import "./subscribe.css";

export default function Subscribe() {
  useScrollToTop();
  
  return (
    <main className="subscribe">
      <Hero />
      <BusinessProcess />
      <OrderForm />
    </main>
  )
}