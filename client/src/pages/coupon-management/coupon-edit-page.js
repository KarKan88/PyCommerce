/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import React from "react";
import { makeStyles } from "@material-ui/core";

import EditCoupon from "../../components/coupon-management/EditCoupon";
import ToastMessageContainer from "../../components/toast";
/**
 * Initialzing a variable useStyles to create a styling for the Edit coupon page
 */
const useStyles = makeStyles((theme) => ({
  editcoupon: {
    padding: "30px",
    marginTop: 55,
  },
}));

function EditCouponPage() {
  const classes = useStyles();

  return (
    <div className={classes.editcoupon}>
      <EditCoupon />
      <ToastMessageContainer />
    </div>
  );
}
/**
 * Export the page as EditCouponPage
 */
export default EditCouponPage;
