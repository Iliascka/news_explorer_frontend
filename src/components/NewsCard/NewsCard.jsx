import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NewsCard({
  labelTag,
  publishedAt,
  title,
  description,
  urlToImage,
  source,
  handleSaveArticle,
  handleDeleteArticle,
  article,
  isSaved,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  const toolTipText = isSavedPage
    ? "Remove from saved"
    : "Sign in to save articles";
  const buttonType = isSavedPage
    ? "card__button_type_delete"
    : "card__button_type_bookmark";

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const bookmarkSaved =
    isSaved && isLoggedIn ? "card__button_type_bookmark-clicked" : "";
  const handleSaveCard = () => {
    handleSaveArticle(article);
  };

  const handleDeleteCard = () => {
    handleDeleteArticle(article);
  };
  const articleKeyword = isLoggedIn && isSavedPage;

  const handlerType =
    !isSavedPage && !isSaved
      ? handleSaveCard
      : isSavedPage && isSaved
        ? handleDeleteCard
        : undefined;

  return (
    <li className="card">
      <img src={urlToImage} alt="cardImg" className="card__image" />
      {articleKeyword && labelTag && (
        <span className="card__keyword">{labelTag}</span>
      )}
      <button
        onClick={handlerType}
        type="button"
        className={`card__save-button ${bookmarkSaved} ${buttonType}`}
      ></button>
      {!isLoggedIn && <span className="card__tooltip">{toolTipText}</span>}

      <div className="card__content">
        <p className="card__header">{formattedDate}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__footer">{source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
