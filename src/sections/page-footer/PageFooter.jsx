// Components
import CompanyLogo from "../../components/company-logo/CompanyLogo";
import NavLinks from "../../components/nav-links/NavLinks";

// Styles
import "./page-footer.css";

export default function PageFooter() {
  return (
    <footer className="page-footer">
        <div>
          <CompanyLogo />
          <NavLinks />
        </div>
        socials
    </footer>
  )
}