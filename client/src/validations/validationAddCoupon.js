/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import Validator from "validator";
import isEmpty from "lodash/isEmpty";
/**
 * Function to validate input data from the forms
 */
function validateInput(data) {
  let errors = {};
  /**
   * Check if the coupon code is empty
   */
  if (Validator.isEmpty(data.couponCode)) {
    errors.couponCode = "This field is required";
  }
  /**
   * Check if the coupon condition is empty
   */
  if (Validator.isEmpty(data.couponCondition)) {
    errors.couponCondition = "This field is required";
  }
  /**
   * Check if the maximum amount off is empty or not a number
   */
  if (Validator.isEmpty(data.maximumOff)) {
    errors.maximumOff = "This field is required";
  } else if (!Validator.isNumeric(data.maximumOff)) {
    errors.maximumOff = "Please enter a valid number";
  }
  /**
   * Check if the discount is empty or not a number
   */
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
/**
 * Export the function as validateInput
 */
export default validateInput;
