import { useLocation, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIconBlack from "../../assets/logoutIconBlack.svg";
import logoutIconWhite from "../../assets/logoutIconWhite.svg";

function Navigation({
  isSavedNews,
  isLoggedIn,
  handleLoginModal,
  isMobileMenu,
}) {
  const location = useLocation();
  const buttonMain = location.pathname === "/";
  const buttonIcon = buttonMain ? logoutIconWhite : logoutIconBlack;

  return (
    <nav
      className={`nav ${!isLoggedIn ? "nav__list_logged-out" : ""} ${isMobileMenu ? "nav_mobile-menu" : ""}`}
    >
      <ul className="nav__list">
        {" "}
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isSavedNews ? "nav-link_saved-news" : "nav-link_main"}
           ${isActive ? "nav-link_active" : ""}`
          }
          to="/"
        >
          <li className="nav__item">Home</li>
        </NavLink>
        {(isSavedNews || isLoggedIn) && (
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isSavedNews ? "nav-link_saved-news" : "nav-link_main"} ${isActive ? "nav-link_active" : ""}`
            }
            to="/saved-news"
          >
            {" "}
            <li className="nav__item">Saved Articles</li>
          </NavLink>
        )}
      </ul>

      {isSavedNews || isLoggedIn ? (
        <button
          type="button"
          className={`nav__button ${buttonMain ? "nav__button_main" : ""}`}
        >
          Ilias <img className="nav__button-icon" src={buttonIcon} alt="" />
        </button>
      ) : (
        <button
          onClick={handleLoginModal}
          type="button"
          className="nav__button_logged-out"
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
