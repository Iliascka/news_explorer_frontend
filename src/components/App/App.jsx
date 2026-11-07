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
import SignOutModal from "../SignOutModal/SignOutModal";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import { getNewsApi } from "../../utils/NewsApi";
import * as auth from "../../utils/auth";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { getArticles, saveArticle, deleteArticle } from "../../utils/MainApi";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noArticles, setNoArticles] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userData, setUserData] = useState({});
  const [authCheck, setAuthCheck] = useState(true);

  const getItemsData = async () => {
    try {
      const data = await getArticles();
      setSavedArticles(data);
      if (data.length === 0) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    getItemsData();
  }, [isLoggedIn]);

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
      console.log(article);
      const { message } = await deleteArticle(article);
      const newArticles = savedArticles.filter((item) => item !== article);
      alert(message);
      setSavedArticles(newArticles);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    if (!name || !email || !password) return;
    try {
      await auth.register({ name, email, password });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) return;
    try {
      const data = await auth.login({ email, password });
      setUserData(data.user);
      setIsLoggedIn(true);
      setActiveModal("");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    const verifyUserCookies = async () => {
      try {
        const data = await auth.getCurrentUser();
        setUserData(data.user);
        setIsLoggedIn(true);
      } catch (err) {
        console.error(err);
        setIsLoggedIn(false);
      } finally {
        setAuthCheck(false);
      }
    };
    verifyUserCookies();
  }, []);

  const handleSearch = async (keyword) => {
    setNoArticles(false);
    setErrorMessage(false);
    setIsEmptySearch(false);
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
        title: item.title,
        link: item.url,
        date: item.publishedAt,
        text: item.description,
        image: item.urlToImage,
        source: item.source?.name ?? "",
        keyword,
      }));
      setArticles(updatedArticles);
    } catch (err) {
      setErrorMessage(true);
      console.error("Search failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    setArticles([]);
    setNoArticles(false);
    setErrorMessage(false);
    setIsEmptySearch(false);
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

  const handelSignOutModal = () => {
    setActiveModal("signOut");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userData }}
        >
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
                        setIsEmptySearch={setIsEmptySearch}
                        handleSignOut={handleSignOut}
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
                      {isEmptySearch && (
                        <NothingFound
                          tile={"Empty Search"}
                          paragraph="Please enter a keyword to search"
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
                    <ProtectedRoute
                      isLoggedIn={isLoggedIn}
                      authCheck={authCheck}
                    >
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
          onSecondaryButtonClick={handleLoginModal}
          handleSuccessModal={handleSuccessModal}
          handleRegister={handleRegister}
        />
        <LoginModal
          handleLogin={handleLogin}
          isOpen={activeModal === "logIn"}
          onClose={closeModal}
          onSecondaryButtonClick={handleSignUpModal}
        />
        <SuccessModal
          userData={userData}
          isOpen={activeModal === "success"}
          onClose={closeModal}
          onSecondaryButtonClick={handleLoginModal}
        />
        <SignOutModal
          isOpen={activeModal === "signOut"}
          onClose={onClose}
          userData={userData}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
