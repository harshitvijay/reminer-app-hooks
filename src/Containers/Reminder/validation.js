export const handleValidation = (fields, setErrors) => {
  const errorObj = {};
  let formIsValid = true;

  if (!fields.task) {
    formIsValid = false;
    errorObj.task = "Cannot be empty";
  }
  if (!fields.date) {
    formIsValid = false;
    errorObj.date = "Cannot be Empty!";
  }
  if (!fields.time) {
    formIsValid = false;
    errorObj.time = "Cannot be Empty!";
  }
  setErrors(errorObj);
  return formIsValid;
};
