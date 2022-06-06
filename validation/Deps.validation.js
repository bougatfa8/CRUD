const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateDep(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
 

  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname";
  }
  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required Email";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};
