import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main() {
  const { articles } = useContext(ArticlesContext);
  return <>{/* <NewsCardList articles={articles} title button /> */}</>;
}

export default Main;
