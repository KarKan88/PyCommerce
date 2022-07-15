/**
 * @Author: Dhruvrajsinh Vansia
 * Banner ID: B00891415
 * Billing section of the cart
 */

import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Grid,
  Button,
  Card,
  FormControl,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCost } from "../../actions/checkout-action";

const useStyle = makeStyles({
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  greyTextColor: {
    color: "#000",
  },
  container: {
    "& > *": {
      marginBottom: 13,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

const TotalView = ({ cartItems }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  let totalCost = 0;
  let totalMrp = 0;

  let totalItems = 0;

  const [couponCode, setCouponCode] = useState("");

  const onChange = (ev) => {
    if (ev.target.name == "couponCode") {
      setCouponCode(ev.target.value);
    }
  };

  for (let i = 0; i < cartItems.length; i += 1) {
    totalItems += cartItems[i]["qty"];
    totalCost += cartItems[i]["qty"] * cartItems[i]["disc"]["price"]["cost"];
    totalMrp += cartItems[i]["qty"] * cartItems[i]["disc"]["price"]["mrp"];
  }

  const discount = totalMrp - totalCost;

  const placeOrder = () => {
    dispatch(addCost(totalCost));
    history.push("/shipping");
  };

  return (
    <>
      {totalCost == 0 ? (
        <> </>
      ) : (
        <Box>
          <Box
            className={classes.header}
            style={{
              paddingTop: "9px",
              paddingBottom: "9px",
            }}
          >
            <Typography className={classes.greyTextColor}>
              PRICE DETAILS
            </Typography>
          </Box>
          <Box
            className={clsx(classes.header, classes.container)}
            style={{ paddingTop: "2px" }}
          >
            <Typography>
              Price ({totalItems} item)
              <span className={classes.price}>${totalMrp}</span>
            </Typography>
            <Typography>
              Discount<span className={classes.price}>-${discount}</span>
            </Typography>
            <Typography>
              Delivery Charges
              <span className={classes.price}>FREE</span>
            </Typography>

           

            <Typography
              className={classes.totalAmount}
              style={{ paddingTop: "2px" }}
            >
              Total Payable
              <span className={classes.price}>${totalCost}</span>
            </Typography>
            <Typography
              style={{
                fontSize: 16,
                color: "green",
              }}
            >
              Total saving on this order is ${discount}.
            </Typography>
            <Grid
              container
              style={{
                backgroundColor: "#fff",
                // padding: "2px 10px 2px 2px",
              }}
            >
               <>
              <FormControl>
                <TextField
                  style={{ backgroundColor: "#fff", width: 130 }}
                  variant="filled"
                  size="small"
                  label="Coupon"
                  value={couponCode}
                  onChange={(e) => onChange(e)}
                  name="couponCode"
                />
              </FormControl>
              
              <Button
                 variant="contained"
                 style={{
                   backgroundColor: "#EB853B",
                   color: "#222",
                   fontWeight: 600,
                   width: 50,
                   marginLeft: '6px'
                 }}
                // onClick={() => ()}
              >
                Apply
              </Button>
            
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#EB853B",
                  color: "#222",
                  fontWeight: 600,
                  marginLeft: '5px',
                  width: 50
                }}
                onClick={placeOrder}
              >
                Buy
              </Button>
              </>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TotalView;
