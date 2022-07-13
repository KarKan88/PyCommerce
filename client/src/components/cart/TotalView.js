import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";

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
      marginBottom: 20,
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

  let totalCost = 0;
  let totalMrp = 0;
  const tax = 15;

  let totalSaving = 0;

  for (let i = 0; i < cartItems.length; i += 1) {
    totalCost += cartItems[i]["price"]["cost"];
    totalMrp += cartItems[i]["price"]["mrp"];
  }

  const discount = totalMrp - totalCost;


  return (
  <Box>
    <Box className={classes.header} style={{
       paddingTop: '40px', paddingBottom: '40px'
    }}>
      <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
    </Box>
    <Box className={clsx(classes.header, classes.container)} style={{paddingTop: '10px'}}>
      <Typography>
        Price ({cartItems?.length} item)
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
      <Typography className={classes.totalAmount} style={{paddingTop: '22px'}}>
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
    </Box>
  </Box>
  );
};

export default TotalView;
