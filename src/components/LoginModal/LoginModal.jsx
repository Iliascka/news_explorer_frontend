import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useModalClose from "../../hooks/useModalClose";
import { useMemo } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function LoginModal({ isOpen, onClose, onSecondaryButtonClick }) {
  const { handleOverlayClick } = useModalClose(isOpen, onClose);

  const defaultValues = useMemo(
    () => ({
      email: "",
      password: "",
      name: "",
    }),
    [],
  );

  const {
    values,
    errors,
    hasSubmitted,
    setHasSubmitted,
    handleChange,
    resetForm,
    validateForm,
    isValid,
  } = useFormWithValidation(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    setHasSubmitted(true);
    const { nextIsValid } = validateForm(values);
    if (!nextIsValid) {
      return;
    }
  }

  const showEmailError =
    Boolean(errors.email) && (hasSubmitted || values.email.trim().length > 0);

  const showPasswordError =
    Boolean(errors.password) &&
    (hasSubmitted || values.password.trim().length > 0);

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondaryButtonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSecondaryButtonClick={onSecondaryButtonClick}
      handleOverlayClick={handleOverlayClick}
      isValid={isValid}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          id="login-email"
          type="email"
          className={`modal__input ${showEmailError ? "modal__input_type_error" : ""}`}
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={values.email}
          aria-invalid={showEmailError}
        />
        {showEmailError ? (
          <span className="modal__error">{errors.email}</span>
        ) : null}
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          id="login-password"
          type="password"
          className={`modal__input ${showEmailError ? "modal__input_type_error" : ""}`}
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={values.password}
          aria-invalid={showPasswordError}
        />
        {showPasswordError ? (
          <span className="modal__error">{errors.password}</span>
        ) : null}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
