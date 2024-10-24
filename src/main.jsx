import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Routing
import { HashRouter as Router } from "react-router-dom";

// Context
import OrderContextProvider from "./context/OrderContextProvider.jsx";

// Components
import App from "./App.jsx";

// Styles
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderContextProvider>
      <Router>
        <App />
      </Router>
    </OrderContextProvider>
  </StrictMode>,
)