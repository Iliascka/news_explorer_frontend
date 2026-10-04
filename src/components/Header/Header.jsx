import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.css";
function Header({ handleLoginModal }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(CurrentUserContext);
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNews ? "header_saved-news" : ""}`}>
      <NavLink
        className={`nav-link ${isSavedNews ? "nav-link_saved-news" : "nav-link_main"}`}
        to="/"
      >
        <p className="header__logo">NewsExplorer</p>
      </NavLink>
      <Navigation
        handleLoginModal={handleLoginModal}
        isLoggedIn={isLoggedIn}
        isSavedNews={isSavedNews}
      />
    </header>
  );
}

export default Header;
