import "./Navigation.css";
import logoutIcon from "../../assets/logout-icon.svg";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {" "}
        <li classname="nav__item">Home</li>
        <li classname="nav__item">Saved Articles</li>
        <li classname="nav__item">
          <button className="nav__button" type="button">
            Sign in <img className="nav__button-icon" src={logoutIcon} alt="" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
