import NewsCard from "../NewsCard/NewsCard";
import { articleData } from "../../utils/articleData";
import "./NewsCardList.css";
function NewsCardList() {
  return (
    <div className="article">
      <h2 className="article__title">Search results</h2>
      <ul className="article__list">
        {articleData.map((item) => {
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
      <button type="button" className="article__button">
        Shows more
      </button>
    </div>
  );
}

export default NewsCardList;
