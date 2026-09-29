import "./ModalWithForm.css";
import modalCloseIcon from "../../assets/modal-close.svg";

function ModalWithForm({ children, title, buttonText, secondaryButtonText }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close">
          <img src={modalCloseIcon} alt="" className="modal__close-icon" />
        </button>
        <form action="" className="modal__form">
          {children}
          <div className="modal__buttons">
            <span className="modal__error-text">
              This email is not available
            </span>
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <button type="button" className="modal__secondary-button">
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
