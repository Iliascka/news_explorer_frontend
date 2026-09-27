import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";
import "./Header.css";
function Header() {
  const location = useLocation();
  const { isLoggedIn } = useContext(CurrentUserContext);
  const isSavedNews = location.pathname === "/saved-news";
  return (
    <header className={`header ${isSavedNews ? "header_saved-news" : ""}`}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} isSavedNews={isSavedNews} />
    </header>
  );
}

export default Header;
