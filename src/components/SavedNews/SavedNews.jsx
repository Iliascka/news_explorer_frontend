import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";

function SavedNews({ handleDeleteArticle }) {
  const { savedArticles } = useContext(ArticlesContext);
  const convertText = (text) => {
    const trimmed = text.trim();
    return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  };

  const filteredTags = savedArticles
    .map((item) => convertText(item.tag))
    .filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });

  const remainingLength = filteredTags.length - 2;
  let remainingText = "";
  if (remainingLength > 1) {
    remainingText = `and ${remainingLength} others`;
  } else if (remainingLength === 1) {
    remainingText = `and ${remainingLength} other`;
  }
  return (
    <>
      <Header />
      <section className="savedNews">
        <p className="savedNews__header">Saved articles</p>
        <h2 className="savedNews__title">Elise, you have 5 saved articles</h2>
        <p className="savedNews__footer">
          <span className="savedNews__keyword">By keywords:</span>
          {`${filteredTags.slice(0, 2).join(", ")} ${remainingText}`}
        </p>
      </section>
      <NewsCardList
        handleDeleteArticle={handleDeleteArticle}
        articles={savedArticles}
        title={false}
        button={false}
      />
    </>
  );
}

export default SavedNews;
