import Navigation from "../Navigation/Navigation";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import menuIconBlack from "../../assets/menu-black.svg";
function Header({ handleLoginModal }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(CurrentUserContext);
  const isSavedNews = location.pathname === "/saved-news";
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const menuIconColor = isSavedNews ? menuIconBlack : menuIcon;

  const handleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  return (
    <header
      className={`header ${isSavedNews ? "header_saved-news" : "header_main"} ${isMobileMenu ? "header_mobile-nav" : ""}`}
    >
      <NavLink
        className={`nav-link ${
          isSavedNews && !isMobileMenu ? "nav-link_saved-news" : "nav-link_main"
        }`}
        to="/"
      >
        <p className="header__logo">NewsExplorer</p>
      </NavLink>
      <button
        onClick={handleMobileMenu}
        type="button"
        className="header__menu-btn"
      >
        <img
          src={!isMobileMenu ? menuIconColor : closeIcon}
          alt="menuIcon"
          className="header__menu-icon"
        />
      </button>
      <Navigation
        handleLoginModal={handleLoginModal}
        isLoggedIn={isLoggedIn}
        isSavedNews={isSavedNews}
        isMobileMenu={isMobileMenu}
      />
      {isMobileMenu && <div className="header__overlay"></div>}
    </header>
  );
}

export default Header;
