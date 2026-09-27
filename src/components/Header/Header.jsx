import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import "./Header.css";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSavedNews, setIsSavedNews] = useState(false);
  return (
    <header className={`header ${!isSavedNews ? "header_saved-news" : ""}`}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} isSavedNews={isSavedNews} />
    </header>
  );
}

export default Header;
