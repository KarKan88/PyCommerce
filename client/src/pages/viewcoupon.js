/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  colors,
  Button,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Sidebar from "../components/profile/seller-sidebar";
import { useHistory } from "react-router-dom";
/**
 * Initialzing a variable useStyles to create a styling for the Coupon View Page
 */
const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 6%",
    display: "flex",
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.between(0, 960)]: {
      paddingRight: 0,
      marginBottom: 20,
    },
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
/**
 * Funtion to view the coupons extracted from the storage
 */
function ViewCoupon(props) {
  const [data, setData] = useState([]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useHistory();
/**
 * Get the coupon data from the storage using useEffect.
 */
  useEffect(() => {
    if (localStorage.getItem("couponData")) {
      let values = JSON.parse(localStorage.getItem("couponData"));
      if (values.length > 0) {
        if (JSON.stringify(data) != JSON.stringify(values)) {
          setData(values);
          console.log(data);
        }
      }
    }
  });

  /**
   * Funtion to handle the event when edit coupon is clicked 
   */
  const editCoupon = (id) => {
    console.log(id);
    navigate.push("/edit-coupon/" + id);
  };
  /**
   * Function to handle the event when delete coupon is clicked
   */
  const deleteCoupon = (index) => {
    let deletedData = data;
    deletedData.splice(index, 1);

    setTimeout(() => {
      localStorage.setItem("couponData", JSON.stringify(deletedData));
      setData(JSON.parse(localStorage.getItem("couponData")));
    }, 1000);
  };

  /**
   * Return the Card items with coupon data on each card.
   */
  return (
    <Grid container className={classes.component}>
      <Grid
        item
        lg={3}
        md={3}
        sm={12}
        xs={12}
        className={classes.leftComponent}
      >
        <Sidebar />
      </Grid>{" "}
      <Grid
        style={{
          background: "#fff",
        }}
        item
        lg={9}
        md={9}
        sm={12}
        xs={12}
      >
        <Grid container className={classes.component} spacing={3}>
          {" "}
          {data.map((item, index) => (
            <Grid
              key={index}
              style={{
                background: "#fff",
              }}
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
            >
              <div classname="">
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Coupon Code: {item.couponCode}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Coupon Condition: {item.couponCondition}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Discount Percentage: {item.discount}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Maximum Off: {item.maximumOff}{" "}
                    </Typography>{" "}
                  </CardContent>{" "}
                  <CardActions disableSpacing className="">
                    <div className="mx-2">
                      <Button
                        style={{
                          backgroundColor: "#EB853B",
                          marginTop: 20,
                          color: "#222",
                          fontWeight: 600,
                          marginRight: 10,
                        }}
                        size="small"
                        variant="contained"
                        type="submit"
                        color="primary"
                        className=""
                        onClick={() => deleteCoupon(index)}
                      >
                        DELETE{" "}
                      </Button>{" "}
                    </div>{" "}
                    <div className="mx-2">
                      <Button
                        style={{
                          backgroundColor: "#FFBB38",
                          marginTop: 20,
                          color: "#222",
                          fontWeight: 600,
                          marginRight: 10,
                        }}
                        size="small"
                        variant="contained"
                        type="submit"
                        color="primary"
                        className=""
                        onClick={() => editCoupon(item.id)}
                      >
                        MODIFY{" "}
                      </Button>{" "}
                    </div>{" "}
                  </CardActions>{" "}
                </Card>{" "}
              </div>{" "}
            </Grid>
          ))}{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Grid>
  );
}
/**
 * Export the page as ViewCoupon
 */
export default ViewCoupon;
