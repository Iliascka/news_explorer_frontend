import { useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route } from "react-router-dom";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSavedNews, setIsSavedNews] = useState(true);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ isLoggedIn, isSavedNews }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Hero />
                  <Main />
                  <About />
                </>
              }
            ></Route>
            <Route path="/saved-news" element={SavedNews} />
          </Routes>
        </CurrentUserContext.Provider>

        <Footer />
      </div>
    </>
  );
}

export default App;
