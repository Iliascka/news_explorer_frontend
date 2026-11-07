import useModalClose from "../../hooks/useModalClose";

function SignOutModal({ isOpen, onClose }) {
  const { handleOverlayClick } = useModalClose(isOpen, onClose);
  return (
    <div
      onClick={handleOverlayClick}
      className={`success-modal  ${isOpen ? "success-modal-opened" : ""}`}
    >
      <div className="success-modal__content">
        <button onClick={onClose} className="success-modal__close-btn">
          <img
            src={modalCloseIcon}
            alt="Close"
            className="success-modal__icon"
          />
        </button>
        <h3 className="success-modal__text">
          Registration successfully completed!
        </h3>
        <button
          onClick={onSecondaryButtonClick}
          className="success-modal__button"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
