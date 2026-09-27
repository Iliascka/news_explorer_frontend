import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";
function Header() {
  const { isLoggedIn, isSavedNews } = useContext(CurrentUserContext);
  return (
    <header className={`header ${!isSavedNews ? "header_saved-news" : ""}`}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} isSavedNews={isSavedNews} />
    </header>
  );
}

export default Header;
