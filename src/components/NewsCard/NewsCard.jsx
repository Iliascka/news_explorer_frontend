import cardImg from "../../assets/card-img.jpg";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard() {
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
    <article className="card">
      <img src={cardImg} alt="cardImg" className="card__image" />
      <span className="card__keyword">Nature</span>
      <button
        type="button"
        className={`card__save-button ${buttonType}`}
      ></button>
      <span className="card__tooltip">{toolTipText}</span>

      <div className="card__content">
        <p className="card__header">November 4, 2026</p>
        <h2 className="card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className="card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__footer">TREEHUGGER</p>
      </div>
    </article>
  );
}

export default NewsCard;
