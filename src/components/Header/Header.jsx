import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/menu.svg";
function Header({ handleLoginModal }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(CurrentUserContext);
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <header
      className={`header ${isSavedNews ? "header_saved-news" : "header_main"}`}
    >
      <NavLink
        className={`nav-link ${isSavedNews ? "nav-link_saved-news" : "nav-link_main"}`}
        to="/"
      >
        <p className="header__logo">NewsExplorer</p>
      </NavLink>
      <img src={menuIcon} alt="menuIcon" className="header__menu-icon" />
      <Navigation
        handleLoginModal={handleLoginModal}
        isLoggedIn={isLoggedIn}
        isSavedNews={isSavedNews}
      />
    </header>
  );
}

export default Header;
