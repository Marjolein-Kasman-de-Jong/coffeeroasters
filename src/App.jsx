// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Subscribe from "./pages/subscribe/Subscribe";

// Sections
import PageHeader from "./sections/page-header/PageHeader";
import PageFooter from "./sections/page-footer/PageFooter";

function App() {
  return (
    <>
        <PageHeader />
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
        <PageFooter />
    </>
  )
}

export default App;