import bookmarkIcon from "../../assets/bookmark.svg";
import cardImg from "../../assets/card-img.jpg";
import "./NewsCard.css";

function NewsCard() {
  return (
    <article className="card">
      <img src={cardImg} alt="cardImg" className="card__image" />
      <span className="card__keyword">Nature</span>
      <span className="card__tooltip">Sign in to save articles</span>
      <button type="button" className="card__save-button">
        <img
          src={bookmarkIcon}
          alt="bookmark-icon"
          className="card__save-icon"
        />
      </button>
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
