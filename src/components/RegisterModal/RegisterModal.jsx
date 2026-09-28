import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal() {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      secondaryButtonText="or Sign in"
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          id="register-email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          id="register-password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
