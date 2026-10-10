import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, title, button }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  const [visibleCount, setVisibleCount] = useState(3);
  const { isLoggedIn } = useContext(CurrentUserContext);
  let buttonText = "";

  const handleArticleList = () => {
    if (visibleCount < articles.length) {
      setVisibleCount((previousValue) => {
        return previousValue + 3;
      });
    } else {
      return setVisibleCount(3);
    }
  };
  visibleCount < articles.length
    ? (buttonText = "Shows more")
    : (buttonText = "Show less");

  return (
    <div className="article">
      <div
        className={`article__content ${isSavedNews ? "article__content_saved-news" : ""}`}
      >
        {title && <h2 className="article__title">Search results</h2>}
        <ul className="article__list">
          {articles.slice(0, visibleCount).map((item) => {
            return (
              <NewsCard
                key={item.id}
                tag={item.tag}
                date={item.publishedAt}
                title={item.title}
                paragraph={item.description}
                image={item.image}
                source={item.source}
              />
            );
          })}
        </ul>
        {button && (
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
