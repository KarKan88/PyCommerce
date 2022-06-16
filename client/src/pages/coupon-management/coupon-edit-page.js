import React from "react";
import { makeStyles } from "@material-ui/core";

import EditCoupon from "../../components/coupon-management/EditCoupon";
import ToastMessageContainer from "../../components/toast";

const useStyles = makeStyles((theme) => ({
  editcoupon: {
    padding: "30px",
    marginTop: 55
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

export default EditCouponPage;