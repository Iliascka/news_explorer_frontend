import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
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
  const [failedImageUrl, setFailedImageUrl] = useState(null);
  const isSavedPage = location.pathname === "/saved-news";
  const hasImage = urlToImage && failedImageUrl !== urlToImage;

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
      {hasImage ? (
        <img
          src={urlToImage}
          alt={title ? `Article image: ${title}` : "Article image"}
          className="card__image"
          onError={() => setFailedImageUrl(urlToImage)}
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
