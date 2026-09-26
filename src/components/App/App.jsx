import { useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <>
      <div className="page">
        <Hero />
        <About />
        <Footer />
        <Main />
      </div>
    </>
  );
}

export default App;
