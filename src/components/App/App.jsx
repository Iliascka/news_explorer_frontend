import { useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSavedNews, setIsSavedNews] = useState(true);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ isLoggedIn, isSavedNews }}>
          <Hero />
          <Main />
        </CurrentUserContext.Provider>
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
