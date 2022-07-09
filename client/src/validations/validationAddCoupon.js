/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import Validator from "validator";
import isEmpty from "lodash/isEmpty";

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.couponCode)) {
    errors.couponCode = "This field is required";
  }

  if (Validator.isEmpty(data.couponCondition)) {
    errors.couponCondition = "This field is required";
  }

  if (Validator.isEmpty(data.quantity)) {
    errors.quantity = "This field is required";
  } else if (!Validator.isNumeric(data.quantity)) {
    errors.quantity = "Please enter a valid number";
  }

  if (Validator.isEmpty(data.discount)) {
    errors.discount = "This field is required";
  } else if (!Validator.isNumeric(data.discount)) {
    errors.discount = "Please enter a valid number";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
