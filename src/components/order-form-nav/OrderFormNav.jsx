// Styles
import "./order-form-nav.css";

export default function OrderFormNav() {
    return (
        <nav className="order-form-nav">
            <ol>
                <li className="nav-item-order-form">
                    <a href="#sort">
                        Preferences
                    </a>
                </li>
                <hr />
                <li className="nav-item-order-form">
                    <a href="#type">
                        Bean Type
                    </a>
                </li>
                <hr />
                <li className="nav-item-order-form">
                    <a href="#amount">
                        Quantity
                    </a>
                </li>
                <hr />
                <li className="nav-item-order-form">
                    <a href="#grind">
                        Grind Option
                    </a>
                </li>
                <hr />
                <li className="nav-item-order-form">
                    <a href="#interval">
                        Deliveries
                    </a>
                </li>
            </ol>
        </nav>
    )
}