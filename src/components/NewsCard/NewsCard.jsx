import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { KeywordContext } from "../../contexts/KeywordContext";

function NewsCard({
  labelTag,
  publishedAt,
  title,
  description,
  urlToImage,
  source,
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
  return (
    <li className="card">
      <img src={urlToImage} alt="cardImg" className="card__image" />
      {isLoggedIn && labelTag && (
        <span className="card__keyword">{labelTag}</span>
      )}
      <button
        type="button"
        className={`card__save-button ${buttonType}`}
      ></button>
      <span className="card__tooltip">{toolTipText}</span>

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
