import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";
import modalCloseIcon from "../../assets/modal-close.svg";

function SuccessModal() {
  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <button className="success-modal__close-btn">
          <img
            src={modalCloseIcon}
            alt="modalCloseIcon"
            className="success-modal__icon"
          />
        </button>
        <h3 className="success-modal__text">
          Registration successfully completed!
        </h3>
        <button className="success-modal__button">Sign in</button>
      </div>
    </div>
  );
}

export default SuccessModal;
