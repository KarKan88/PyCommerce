import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, makeStyles, Box, Typography } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
const useStyles = makeStyles(theme => ({
  btn: {
    color: "#222",
    fontWeight: 600,
    textTransform: "capitalize",
    cursor: "pointer",
    borderRadius: 2,
    height: 35,
    padding: "5px 35px",
    border: "1px solid #FFBB38",
    boxShadow: "none"
  }
}));
/*
Component for the form to add a coupon.
Referenced from the tutorial on freecodecamp: https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/
*/

const CouponForm = (props) => {
  const [coupon, setCoupon] = useState(() => {
    return {
      couponcode: props.coupon ? props.coupon.couponcode : '',
      condition: props.coupon ? props.coupon.condition : '',
      maxdiscount: props.coupon ? props.coupon.maxdiscount : '',
      discountpercentage: props.coupon ? props.coupon.discountpercentage : '',
      date: props.coupon ? props.coupon.date : ''
    };
  });
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState('');
  const { couponcode: couponcode, condition: condition, discountpercentage: discountpercentage, maxdiscount: maxdiscount } = coupon;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [couponcode, condition, discountpercentage, maxdiscount];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const coupon = {
        id: uuidv4(),
        couponcode,
        condition,
        discountpercentage,
        maxdiscount,
        date: new Date()
      };
      props.handleOnSubmit(coupon);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'maxdiscount':
        if (value === '' || parseInt(value) === +value) {
          setCoupon((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'discountpercentage':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setCoupon((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setCoupon((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Coupon Code</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="couponcode"
            value={couponcode}
            placeholder="Enter the coupon code"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="condition">
          <Form.Label>Coupon Eligibility</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="condition"
            value={condition}
            placeholder="Enter a condition for the couponcode"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="maxdiscount">
          <Form.Label>Discount Percentage</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="maxdiscount"
            value={maxdiscount}
            placeholder="Enter the percentage of discount"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="discountpercentage">
          <Form.Label>Maximum Amount of Discount</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="discountpercentage"
            value={discountpercentage}
            placeholder="Enter the maximum amount of discount"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button  type="submit" className={classes.btn}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CouponForm;
