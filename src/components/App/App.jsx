import { useEffect, useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { Routes, Route } from "react-router-dom";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import { getNewsApi } from "../../utils/NewsApi";
import * as auth from "../../utils/auth";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { getItems, saveArticle, deleteArticle } from "../../utils/api";
import { setToken, getToken, removeToken } from "../../utils//token";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noArticles, setNoArticles] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userData, setUserData] = useState({});

  const getItemsData = async () => {
    try {
      const data = await getItems();
      if (data.length === 0) {
        return;
      }
      setArticles(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveArticle = async (article) => {
    if (!isLoggedIn) return;
    try {
      if (!article) {
        throw new Error("Error: No article found");
      }

      const newArticle = await saveArticle(article);

      setSavedArticles((prev) => [newArticle, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteArticle = async (article) => {
    try {
      if (!article) {
        throw new Error("Failed to delete the article. Please try again");
      }
      const { message } = await deleteArticle(article);
      const newArticles = savedArticles.filter((item) => item !== article);
      alert(message);
      setSavedArticles(newArticles);
    } catch (err) {
      console.error(err);
    }
  };

  // Development only: Uncomment to test the mock GET API
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     setArticles([]);
  //     return;
  //   }
  //   getItemsData();
  // }, [isLoggedIn]);

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) return;
    try {
      const data = await auth.authorize({ email, password });
      if (!data.token) {
        throw new Error(`Error: No token received`);
      }

      setToken(data.token);
      const userData = await auth.checkToken(data.token);
      setUserData(userData.data);
      setIsLoggedIn(true);
      setActiveModal("");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const verifyToken = async () => {
    if (!getToken()) return;

    try {
      const data = await auth.checkToken(getToken());
      setUserData(data.data);

      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      setIsLoggedIn(false);
      removeToken();
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  const handleSearch = async (keyword) => {
    setNoArticles(false);
    setErrorMessage(false);
    if (!keyword.trim()) return;

    try {
      setIsLoading(true);
      const data = await getNewsApi(keyword);
      if (!Array.isArray(data.articles)) {
        throw new Error("Error: Invalid data");
      }

      if (data.articles.length === 0) {
        setNoArticles(true);
      }
      const updatedArticles = data.articles.map((item) => ({
        ...item,
        tag: keyword,
      }));
      setArticles(updatedArticles);
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
        <CurrentUserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <ArticlesContext.Provider
            value={{ articles, setArticles, savedArticles }}
          >
            <KeywordContext.Provider value={{ keyword, setKeyword }}>
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
                      <Main handleSaveArticle={handleSaveArticle} />
                      <About />
                    </>
                  }
                ></Route>
                <Route
                  path="/saved-news"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <SavedNews
                        userData={userData}
                        handleDeleteArticle={handleDeleteArticle}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </KeywordContext.Provider>
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
          handleLogin={handleLogin}
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
