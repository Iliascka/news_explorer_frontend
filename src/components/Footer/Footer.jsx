import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__info">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <ul className="footer__list">
          <li className="footer__list-item">Home</li>
          <li className="footer__list-item">TripleTen</li>
        </ul>
        <div className="footer__social-icons">
          <img src={githubIcon} alt="" className="footer__social-icon" />
          <img src={linkedinIcon} alt="" className="footer__social-icon" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
