import { useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { articlesData } from "../../utils/articleData";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { Routes, Route } from "react-router-dom";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [articles, setArticles] = useState(articlesData);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ isLoggedIn }}>
          <ArticlesContext.Provider value={{ articles, setArticles }}>
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
              <Route path="/saved-news" element={<SavedNews />} />
            </Routes>
          </ArticlesContext.Provider>
        </CurrentUserContext.Provider>
        <RegisterModal />
        <Footer />
      </div>
    </>
  );
}

export default App;
