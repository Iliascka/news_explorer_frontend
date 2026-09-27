import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";

function SavedNews() {
  const { articles } = useContext(ArticlesContext);
  return (
    <>
      <Header />
      <section className="savedNews">
        <p className="savedNews__header">Saved articles</p>
        <h2 className="savedNews__title">Elise, you have 5 saved articles</h2>
        <p className="savedNews__footer">
          <span className="savedNews__keyword">By keywords:</span> Nature,
          Yellowstone, and 2 other
        </p>
      </section>
      <NewsCardList articles={articles} title={false} button={false} />
    </>
  );
}

export default SavedNews;
