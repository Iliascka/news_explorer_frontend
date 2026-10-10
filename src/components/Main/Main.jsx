import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main() {
  const { articles } = useContext(ArticlesContext);
  return (
    <>
      {articles.length > 0 && <NewsCardList articles={articles} title button />}
    </>
  );
}

export default Main;
