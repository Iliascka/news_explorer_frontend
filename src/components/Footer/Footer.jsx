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
          <a
            className="nav-link nav-link_saved-news"
            href="https://tripleten.com"
          >
            <li className="footer__list-item">TripleTen</li>
          </a>
        </ul>
        <div className="footer__social-icons">
          <a className="nav-link" href="https://github.com/Iliascka">
            <img
              src={githubIcon}
              alt="GitHub"
              className="footer__social-icon"
            />
          </a>
          <a
            className="nav-link"
            href="http://www.linkedin.com/in/ilias-katsantonis"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
