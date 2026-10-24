import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NewsCard({
  keyword,
  date,
  title,
  text,
  image,
  source,
  handleSaveArticle,
  handleDeleteArticle,
  article,
  isSaved,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  const [failedImageUrl, setFailedImageUrl] = useState(null);
  const isSavedPage = location.pathname === "/saved-news";
  const hasImage = image && failedImageUrl !== image;

  const toolTipText = isSavedPage
    ? "Remove from saved"
    : "Sign in to save articles";
  const buttonType = isSavedPage
    ? "card__button_type_delete"
    : "card__button_type_bookmark";

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
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
      {hasImage ? (
        <img
          src={image}
          alt={title ? `Article image: ${title}` : "Article image"}
          className="card__image"
          onError={() => setFailedImageUrl(image)}
        />
      ) : (
        <div
          className="card__image-fallback"
          role="img"
          aria-label="Article image unavailable"
        >
          Image unavailable
        </div>
      )}
      {articleKeyword && keyword && (
        <span className="card__keyword">{keyword}</span>
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
        <p className="card__description">{text}</p>
        <p className="card__footer">{source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
