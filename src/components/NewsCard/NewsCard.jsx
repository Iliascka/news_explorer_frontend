import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({ tag, date, title, paragraph, image, source }) {
  // const location = useLocation();
  // const isSavedPage = location.pathname === "/save-news";
  const isSavedPage = false;
  const toolTipText = isSavedPage
    ? "Remove from saved"
    : "Sign in to save articles";
  const buttonType = isSavedPage
    ? "card__button_type_delete"
    : "card__button_type_bookmark";
  return (
    <li className="card">
      <img src={image} alt="cardImg" className="card__image" />
      <span className="card__keyword">{tag}</span>
      <button
        type="button"
        className={`card__save-button ${buttonType}`}
      ></button>
      <span className="card__tooltip">{toolTipText}</span>

      <div className="card__content">
        <p className="card__header">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{paragraph}</p>
        <p className="card__footer">{source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
