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
import { getNewsApi } from "../../utils/NewsApi";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState(articlesData);
  const [activeModal, setActiveModal] = useState("");
  const [searchData, setSearchData] = useState(false);

  const handleSearch = async () => {
    try {
      const data = await getNewsApi("nvidia");
      console.log(data);
    } catch (err) {
      console.error("Search failed:", err);
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
                    />
                    {/* <Preloader searchData={searchData} /> */}
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
