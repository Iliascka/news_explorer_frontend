import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useModalClose from "../../hooks/useModalClose";

function LoginModal({ isOpen, onClose, onSecondaryButtonClick }) {
  const { handleOverlayClick } = useModalClose(isOpen, onClose);

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondaryButtonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSecondaryButtonClick={onSecondaryButtonClick}
      handleOverlayClick={handleOverlayClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          id="login-email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          id="login-password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
