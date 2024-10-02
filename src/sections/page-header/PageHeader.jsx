// Components
import CompanyLogo from "../../components/company-logo/CompanyLogo";
import Navbar from "../../components/navbar/Navbar";

// Styles
import "./page-header.css";

export default function PageHeader() {
  return (
    <header className="page-header">
        <CompanyLogo />
        <Navbar />
    </header>
  )
}