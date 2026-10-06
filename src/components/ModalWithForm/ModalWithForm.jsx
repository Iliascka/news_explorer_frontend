import "./ModalWithForm.css";
import modalCloseIcon from "../../assets/modal-close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  secondaryButtonText,
  isOpen,
  onClose,
  onSecondaryButtonClick,
  handleOverlayClick,
  onSubmit,
  isValid,
}) {
  return (
    <div
      onClick={handleOverlayClick}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close">
          <img src={modalCloseIcon} alt="" className="modal__close-icon" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <span className="modal__error-text">
              This email is not available
            </span>
            <button type="submit" className="modal__submit" disabled={!isValid}>
              {buttonText}
            </button>
            <button
              onClick={onSecondaryButtonClick}
              type="button"
              className="modal__secondary-button"
            >
              <span className="modal__secondary-text">or</span>{" "}
              {secondaryButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
