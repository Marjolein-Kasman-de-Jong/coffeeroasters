// Components
import CompanyLogo from "../../components/company-logo/CompanyLogo";
import NavLinks from "../../components/nav-links/NavLinks";
import SocialLinks from "../../components/social-links/SocialLinks";

// Styles
import "./page-footer.css";

export default function PageFooter() {
  return (
    <footer className="page-footer">
        <div className="content-wrapper">
          <CompanyLogo />
          <NavLinks />
        </div>
        <SocialLinks />
    </footer>
  )
}