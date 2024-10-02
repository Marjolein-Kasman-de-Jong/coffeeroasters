// Images
import logo from "/shared/desktop/logo.svg";

// Styles
import "./company-logo.css";

export default function CompanyLogo() {
  return (
    <img className="company-logo" src={logo} alt="Coffeeroasters logo" />
  )
}