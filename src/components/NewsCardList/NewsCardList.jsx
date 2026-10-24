import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  title,
  button,
  handleSaveArticle,
  handleDeleteArticle,
}) {
  const { savedArticles } = useContext(ArticlesContext);
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  const [visibleCount, setVisibleCount] = useState(3);
  const { isLoggedIn } = useContext(CurrentUserContext);

  const handleArticleList = () => {
    if (visibleCount < articles.length) {
      setVisibleCount((previousValue) => {
        return previousValue + 3;
      });
    } else {
      return setVisibleCount(3);
    }
  };

  let buttonText = visibleCount < articles.length ? "Shows more" : "Show less";

  return (
    <div className="article">
      <div
        className={`article__content ${isSavedNews ? "article__content_saved-news" : ""}`}
      >
        {title && <h2 className="article__title">Search results</h2>}
        <ul className="article__list">
          {(!isSavedNews ? articles.slice(0, visibleCount) : articles).map(
            (item) => {
              const isSaved = savedArticles.some(
                (savedItem) => item.link === savedItem.link,
              );

              return (
                <NewsCard
                  isSaved={isSaved}
                  article={item}
                  handleSaveArticle={handleSaveArticle}
                  handleDeleteArticle={handleDeleteArticle}
                  keyword={item.keyword}
                  key={item.link}
                  date={item.date}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  source={item.source}
                />
              );
            },
          )}
        </ul>
        {articles.length > 3 && button && (
          <button
            onClick={handleArticleList}
            type="button"
            className={`article__button ${isLoggedIn ? "article__button-active" : ""}`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
