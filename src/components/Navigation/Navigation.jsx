import { useLocation } from "react";
import "./Navigation.css";
import logoutIconBlack from "../../assets/logoutIconBlack.svg";
import logoutIconWhite from "../../assets/logoutIconWhite.svg";
import { NavLink } from "react-router-dom";

// const locatation = useLocation();
// const buttonIcon =
//   location.pathname === "/" ? "nav__button_main" : "nav__button";
const buttonMain = false;
const buttonIcon = buttonMain ? logoutIconWhite : logoutIconBlack;

function Navigation({ isSavedNews, isLoggedIn }) {
  return (
    <nav className="nav">
      <ul className={`nav__list ${!isSavedNews ? "nav__list_logged-out" : ""}`}>
        {" "}
        <NavLink className="nav-link" to="/">
          <li className="nav__item">Home</li>
        </NavLink>
        {(isSavedNews || isLoggedIn) && (
          <NavLink className="nav-link" to="/saved-news">
            {" "}
            <li className="nav__item">Saved Articles</li>
          </NavLink>
        )}
        <li className="nav__item">
          {isSavedNews || isLoggedIn ? (
            <button
              type="button"
              className={`nav__button ${buttonMain ? "nav__button_main" : ""}`}
            >
              Ilias <img className="nav__button-icon" src={buttonIcon} alt="" />
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
