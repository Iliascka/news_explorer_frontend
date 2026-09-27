import { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";
import { articleData } from "../../utils/articleData";

function Main({ isLoggedIn, ssSavedNews }) {
  const [articles, setArticles] = useState(articleData);

  return (
    <>
      <NewsCardList articles={articles} />
    </>
  );
}

export default Main;
