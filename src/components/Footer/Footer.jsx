import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__info">© 2026 Supersite, Powered by News API</p>
      <div className="footer__links">
        <ul className="footer__list">
          <NavLink className="nav-link" to="/">
            <li className="footer__list-item  nav-link_saved-news">Home</li>
          </NavLink>
          <NavLink
            className="nav-link nav-link_saved-news"
            to="https://tripleten.com"
          >
            <li className="footer__list-item">TripleTen</li>
          </NavLink>
        </ul>
        <div className="footer__social-icons">
          <NavLink className="nav-link" to="/">
            <img src={githubIcon} alt="" className="footer__social-icon" />
          </NavLink>
          <NavLink className="nav-link" to="/">
            <img src={linkedinIcon} alt="" className="footer__social-icon" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Footer;
