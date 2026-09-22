import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import "./Header.css";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className={`header ${!isLoggedIn ? "header_logged-out" : ""}`}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
