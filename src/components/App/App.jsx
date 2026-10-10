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
import SuccessModal from "../SuccessModal/SuccessModal";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import { getNewsApi } from "../../utils/NewsApi";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noArticles, setNoArticles] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  const handleSearch = async (keyword) => {
    setNoArticles(false);
    setErrorMessage(false);
    if (!keyword.trim()) return;

    try {
      setIsLoading(true);
      const data = await getNewsApi(keyword);

      if (data.articles.length === 0) {
        setNoArticles(true);
      }
      setArticles(data.articles);
    } catch (err) {
      setErrorMessage(true);
      console.error("Search failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleLoginModal = () => {
    setActiveModal("logIn");
  };

  const handleSuccessModal = () => {
    setActiveModal("success");
  };

  const closeModal = () => {
    setActiveModal("");
  };

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
                    <Hero
                      onClose={closeModal}
                      isOpen={activeModal}
                      handleLoginModal={handleLoginModal}
                      handleSearch={handleSearch}
                    />
                    {isLoading && <Preloader />}
                    {noArticles && (
                      <NothingFound
                        title={"Nothing Found"}
                        paragraph={
                          "Sorry, but nothing matched your search terms."
                        }
                      />
                    )}
                    {errorMessage && (
                      <NothingFound
                        title={"Something went wrong"}
                        paragraph={
                          "Sorry, something went wrong during the request. Please try again later."
                        }
                      />
                    )}
                    <Main />
                    <About />
                  </>
                }
              ></Route>
              <Route path="/saved-news" element={<SavedNews />} />
            </Routes>
          </ArticlesContext.Provider>
        </CurrentUserContext.Provider>
        <RegisterModal
          isOpen={activeModal === "signUp"}
          onClose={closeModal}
          handleLoginModal={handleLoginModal}
          onSecondaryButtonClick={handleLoginModal}
          handleSuccessModal={handleSuccessModal}
        />
        <LoginModal
          isOpen={activeModal === "logIn"}
          onClose={closeModal}
          onSecondaryButtonClick={handleSignUpModal}
        />
        <SuccessModal isOpen={activeModal === "success"} onClose={closeModal} />
        <Footer />
      </div>
    </>
  );
}

export default App;
