import { useCallback, useState } from "react";

const validateValue = (name, value = "") => {
  const normalizedValue = typeof value === "string" ? value : "";

  switch (name) {
    case "email":
      if (!normalizedValue.trim()) return "Please enter a valid email";
      if (!/^\S+@\S+\.\S+$/.test(normalizedValue.trim())) {
        return "Please enter a valid email.";
      }
      return "";
    case "password":
      if (!normalizedValue.trim()) return "Please enter a valid password";
      if (normalizedValue.trim().length < 8) {
        return "Password must be at least 8 characters long.";
      }
      return "";
    case "name":
      if (!normalizedValue.trim()) return "Please enter a name";
      if (normalizedValue.trim().length < 3) {
        return "Name must be at least 3 characters long";
      }
      return "";
    default:
      return "";
  }
};

export function useFormWithValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateForm = useCallback((formValues) => {
    const nextErrors = Object.keys(formValues).reduce((acc, fieldName) => {
      const errorMessage = validateValue(fieldName, formValues[fieldName]);
      if (errorMessage) {
        acc[fieldName] = errorMessage;
      }
      return acc;
    }, {});

    setErrors(nextErrors);
    const nextIsValid = Object.values(nextErrors).every((error) => !error);
    setIsValid(nextIsValid);

    return { nextErrors, nextIsValid };
  }, []);

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;

      setValues((previousValues) => {
        const nextValues = { ...previousValues, [name]: value };
        validateForm(nextValues);
        return nextValues;
      });
    },
    [validateForm],
  );

  const resetForm = useCallback(
    (newValues = defaultValues) => {
      setValues(newValues);
      setErrors({});
      setIsValid(false);
      setHasSubmitted(false);
    },
    [defaultValues],
  );

  return {
    values,
    setValues,
    errors,
    isValid,
    hasSubmitted,
    setHasSubmitted,
    handleChange,
    resetForm,
    validateForm,
  };
}
