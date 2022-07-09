/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import React from "react";
import { makeStyles } from "@material-ui/core";

import CouponsList from "../../components/coupon-management/CouponsList";
import ToastMessageContainer from "../../components/toast";

const useStyles = makeStyles((theme) => ({
  couponslist: {
    padding: "30px",
    marginTop: 55,
  },
}));

function CouponsListPage() {
  const classes = useStyles();

  return (
    <div className={classes.couponslist}>
      <CouponsList />
      <ToastMessageContainer />
    </div>
  );
}

export default CouponsListPage;
