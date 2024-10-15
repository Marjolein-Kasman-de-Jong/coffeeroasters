import { useContext } from "react";

// Context
import { OrderContext } from "../../context/OrderContextProvider";

// Styles
import "./order-form.css";

export default function OrderForm() {
  const {order, updateOrder} = useContext(OrderContext);
  console.log(order);

const handleChange = (event) => {
  const category = event.target.name;
  const selectedOption = event.target.id;

  updateOrder(category, selectedOption)
}

  return (
    <section className="order-form">
      <form>
        <input type="radio" id="capsule" name="sort" onChange={handleChange} />
        <input type="radio" id="filter" name="sort" onChange={handleChange} />
        <input type="radio" id="espresso" name="sort" onChange={handleChange} />
      </form>
    </section>
  )
}