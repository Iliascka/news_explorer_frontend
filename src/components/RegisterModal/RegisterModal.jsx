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
          className="modal__input"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={showEmailError}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          id="register-password"
          type="password"
          className="modal__input"
          name="password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={showPasswordError}
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
          name="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={showNameError}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
