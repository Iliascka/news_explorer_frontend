import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ labelTag, handleSaveArticle }) {
  const { articles } = useContext(ArticlesContext);

  return (
    <>
      {articles.length > 0 && (
        <NewsCardList
          handleSaveArticle={handleSaveArticle}
          labelTag={labelTag}
          articles={articles}
          title
          button
        />
      )}
    </>
  );
}

export default Main;
