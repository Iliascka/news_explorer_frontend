import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, title, button }) {
  const [visibleCount, setVisibleCount] = useState(3);
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
      {title && <h2 className="article__title">Search results</h2>}
      <ul className="article__list">
        {articles.slice(0, visibleCount).map((item) => {
          return (
            <NewsCard
              key={item.id}
              tag={item.tag}
              date={item.date}
              title={item.title}
              paragraph={item.paragraph}
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
          className="article__button"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
