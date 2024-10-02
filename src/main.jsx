import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// Components
import App from "./App.jsx";

// Styles
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)