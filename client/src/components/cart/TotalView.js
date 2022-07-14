/*
 * @author: Dhruvrajsinh Omkarsinh Vansia
 */

import React from "react";
import { Box, Typography, makeStyles, Grid, Button, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCost } from "../../actions/checkout-action";

const useStyle = makeStyles({
  header: {
    padding: "15px 24px",
    background: "#fff"
  },
  greyTextColor: {
    color: "#000"
  },
  container: {
    "& > *": {
      marginBottom: 13,
      fontSize: 14
    }
  },
  price: {
    float: "right"
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0"
  }
});


const TotalView = ({ cartItems }) => {

  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  let totalCost = 0;
  let totalMrp = 0;

  let totalItems = 0

  for (let i = 0; i < cartItems.length; i += 1) {
    totalItems += cartItems[i]["qty"] 
    totalCost += cartItems[i]["qty"] * cartItems[i]["disc"]["price"]["cost"];
    totalMrp +=  cartItems[i]["qty"] * cartItems[i]["disc"]["price"]["mrp"];
  }

  const discount = totalMrp - totalCost;

  const placeOrder = () =>{
    dispatch(addCost(totalCost))
    history.push('/shipping')
  }

  return (
  <>
  { totalCost == 0 ? (<> </>):(
    <Box>
    <Box className={classes.header} style={{
       paddingTop: '10px', paddingBottom: '10px'
    }}>
      <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
    </Box>
    <Box className={clsx(classes.header, classes.container)} style={{paddingTop: '5px'}}>
      <Typography>
        Price ({totalItems} item)
        <span className={classes.price}>${totalMrp}</span>
      </Typography>
      <Typography>
        Discount<span className={classes.price}>-${discount}</span>
      </Typography>
      <Typography>
        Delivery Charges
        <span className={classes.price}>
          FREE
        </span>
      </Typography>
      <Typography className={classes.totalAmount} style={{paddingTop: '5px'}}>
        Total Payable
        <span className={classes.price}>
          ${totalCost}
        </span>
      </Typography>
      <Typography style={{
        fontSize: 16,
        color: "green"}}>
        Total saving on this order is ${discount}.
      </Typography>
      <Grid
            container
            style={{
              backgroundColor: "#fff",
              padding: "2px 10px 2px 62px",
            }}
          >
              
            <Button
              variant="contained"
              className={classes.placeOrder}
              style={{
                backgroundColor: "#EB853B",
                color: "#222",
                fontWeight: 600,
              }}
              onClick={placeOrder}
              
            >
              Place Order
            </Button>
          </Grid>
    </Box>
  </Box>
  )}
  </>
    )
};

export default TotalView;
