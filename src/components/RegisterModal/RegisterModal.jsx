import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useModalClose from "../../hooks/useModalClose";
import { useMemo } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function RegisterModal({
  isOpen,
  onClose,
  onSecondaryButtonClick,
  handleSuccessModal,
}) {
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

  const handleSubmitModal = () => {
    resetForm(defaultValues);
    handleSuccessModal();
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    setHasSubmitted(true);
    const { nextIsValid } = validateForm(values);
    if (!nextIsValid) {
      return;
    }
    handleSubmitModal();
  }

  const showNameError =
    Boolean(errors.name) && (hasSubmitted || values.name.trim().length > 0);

  const showEmailError =
    Boolean(errors.email) && (hasSubmitted || values.email.trim().length > 0);

  const showPasswordError =
    Boolean(errors.password) &&
    (hasSubmitted || values.password.trim().length > 0);

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      title="Sign up"
      buttonText="Sign up"
      secondaryButtonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSecondaryButtonClick={onSecondaryButtonClick}
      handleOverlayClick={handleOverlayClick}
      isValid={isValid}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          id="register-email"
          type="email"
          className={`modal__input ${showEmailError ? "modal__input_type_error" : ""}`}
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={showEmailError}
        />
        {showEmailError ? (
          <span className="modal__error">{errors.email}</span>
        ) : null}
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          id="register-password"
          type="password"
          className={`modal__input ${showEmailError ? "modal__input_type_error" : ""}`}
          name="password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={showPasswordError}
        />
        {showPasswordError ? (
          <span className="modal__error">{errors.password}</span>
        ) : null}
      </label>
      <label htmlFor="register-username" className="modal__label">
        Name
        <input
          type="text"
          className={`modal__input ${showNameError ? "modal__input_type_error" : ""}`}
          id="register-username"
          placeholder="Enter your username"
          name="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={showNameError}
        />
        {showNameError ? (
          <span className="modal__error">{errors.name}</span>
        ) : null}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
