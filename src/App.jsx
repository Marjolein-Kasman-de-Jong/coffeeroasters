// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Subscribe from "./pages/subscribe/Subscribe";

// Styles
import "./App.css";

function App() {
  return (
    <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/subscribe"
          element={<Subscribe />}
        />
    </Routes>
  )
}

export default App;