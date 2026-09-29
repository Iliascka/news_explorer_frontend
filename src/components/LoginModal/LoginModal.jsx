import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal() {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondaryButtonText="Sign up"
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
