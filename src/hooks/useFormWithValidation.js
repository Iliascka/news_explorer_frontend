import { useCallback, useState } from "react";

//  Custom form validation logic.
//  validateValue checks individual fields, while useFormWithValidation
//  manages form values, errors, validity, and submission attempts.
//  useCallback preserves function references between renders until
//  their dependencies change. It does not execute functions automatically.

const validateValue = (name, value = "") => {
  //  Validates one field using its name and current value.
  //  The switch selects the corresponding validation rules.
  //  Returns an error message if invalid, or "" if valid.
  //  normalizedValue ensures string methods can be used safely.

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
    //  Validates every field in the provided formValues object.
    //  Object.keys() creates an array of field names.
    //  reduce() builds an errors object, starting from {}.
    //  formValues[fieldName] accesses each field's value in the original object.
    //  Updates errors and isValid, then returns the calculated results
    //  so they can also be used immediately during submission.

    const nextErrors = Object.keys(formValues).reduce((acc, fieldName) => {
      const errorMessage = validateValue(fieldName, formValues[fieldName]);
      if (errorMessage) {
        acc[fieldName] = errorMessage;
      }
      return acc;
    }, {});

    setErrors(nextErrors);
    // Valid only when no error messages exist; an empty errors object also passes.
    const nextIsValid = Object.values(nextErrors).every((error) => !error);
    setIsValid(nextIsValid);

    return { nextErrors, nextIsValid };
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);
    validateForm(nextValues);
  };

  const resetForm = useCallback(
    // Restores form values and clears validation/submission state.
    // newValues is optional. If no argument is provided, it receives
    // defaultValues, preserving the expected form fields.
    // A custom object can also be passed to reset to specific values.
    // Without the fallback, calling resetForm() would set values to undefined.
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
