import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <>
      <div className="page">
        <div className="hero">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
