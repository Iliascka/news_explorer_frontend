import "./Navigation.css";

import logoutIcon from "../../assets/logoutIcon.svg";

function Navigation({ isLoggedIn }) {
  return (
    <nav className="nav">
      <ul className={`nav__list ${!isLoggedIn ? "nav__list_logged-out" : ""}`}>
        {" "}
        <li className="nav__item">Home</li>
        {isLoggedIn && <li classname="nav__item">Saved Articles</li>}
        <li className="nav__item">
          {isLoggedIn ? (
            <button type="button" className="nav__button">
              Ilias <img className="nav__button-icon" src={logoutIcon} alt="" />
            </button>
          ) : (
            <button type="button" className="nav__button_logged-out">
              Sign in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
