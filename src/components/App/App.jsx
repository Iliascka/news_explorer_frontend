import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";

function App() {
  return (
    <>
      <div className="page">
        <div className="hero">
          <Header />
          <Main />
        </div>
        <About />
        <Footer />
        <NewsCardList />
        {/* <NewsCard /> */}
      </div>
    </>
  );
}

export default App;
