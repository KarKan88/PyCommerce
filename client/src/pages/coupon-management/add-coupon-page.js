/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import React from "react";
import { makeStyles } from "@material-ui/core";

import AddCoupon from "../../components/coupon-management/AddCoupon";
import ToastMessageContainer from "../../components/toast";

const useStyles = makeStyles((theme) => ({
    addcoupon: {
        padding: "30px",
        marginTop: 55
    },
}));

function AddCouponPage() {
    const classes = useStyles();

    return ( <
        div className = { classes.addcoupon } >
        <
        AddCoupon / >
        <
        ToastMessageContainer / >
        <
        /div>
    );
}

export default AddCouponPage;