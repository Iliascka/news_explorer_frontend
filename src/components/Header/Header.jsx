import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import menuIconBlack from "../../assets/menu-black.svg";
function Header({
  isOpen,
  onClose,
  handleLoginModal,
  handleSignOutModal,
  isMobile,
}) {
  const location = useLocation();
  const { isLoggedIn, userData } = useContext(CurrentUserContext);
  const isSavedNews = location.pathname === "/saved-news";

  const menuIconColor = isSavedNews ? menuIconBlack : menuIcon;
  const { isMobileMenu, handleMobileMenu } = isMobile;

  return (
    <header
      className={`header ${isSavedNews ? "header_saved-news" : "header_main"} ${isMobileMenu ? "header_mobile-nav header_saved-news_border" : ""}`}
    >
      <NavLink
        onClick={onClose}
        className={`nav-link ${
          isSavedNews && !isMobileMenu ? "nav-link_saved-news" : "nav-link_main"
        }`}
        to="/"
      >
        <p className="header__logo">NewsExplorer</p>
      </NavLink>
      {!isOpen && (
        <button
          onClick={handleMobileMenu}
          type="button"
          className="header__menu-btn"
        >
          <img
            src={!isMobileMenu ? menuIconColor : closeIcon}
            alt={
              isMobileMenu ? "Close navigation menu" : "Open navigation menu"
            }
            className="header__menu-icon"
          />
        </button>
      )}
      <Navigation
        userData={userData}
        handleLoginModal={handleLoginModal}
        isLoggedIn={isLoggedIn}
        isSavedNews={isSavedNews}
        isMobile={isMobile}
        handleSignOutModal={handleSignOutModal}
      />
      {isMobileMenu && <div className="header__overlay"></div>}
    </header>
  );
}

export default Header;
