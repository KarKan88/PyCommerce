/*
* @author: Adesh Nalpet Adimurthy
*/

import React from "react";
import { useParams } from "react-router";
import {
  Box,
  Divider,
  makeStyles,
  Grid,
  Checkbox
} from "@material-ui/core";

import ToastMessageContainer from "../components/toast";
import ProductList from "../components/product/product-list";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  bottom: {
    minHeight: "500px",
    padding: "16px 22px",
    background: "#fff"
  },
  divider: {
    opacity: "0.6",
    marginBottom: 20,
  },
  sideBarLink: {
    display: "flex",
    alignItems: "center",
    color: "#000",
    padding: "0 0 12px 5px",
    fontSize: 16,
    fontWeight: 500,
  },
  sideBarLinkIcon: {
    color: "#222",
    marginRight: 15,
  },
  subMenu: {
    padding: "5px 0 10px 0",
  },
  subLink: {
    color: "#000",
    padding: "12px 5px 12px 45px",
    fontSize: 14,
  },
  hoverTab: {
    "&:hover": {
      fontWeight: 500,
      color: "#222",
      backgroundColor: "#F0F0F0",
    },
  },
}));

function ProductsPage() {
  const classes = useStyles();
  const { category } = useParams();

  return (
    <div>
      <Grid container className={classes.component}>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          className={classes.leftComponent}>
          <Box className={classes.bottom}>
            <Box className={classes.sideBarLink}>
              <p>Filters</p>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.subMenu}>
              <h4>Customer Ratings</h4>
              <br />
              <Checkbox
                value="checkedA" /> 4 ★ & above
              <br />
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.subMenu}>
              <Box className={classes.subMenu}>
                <h4>Budget</h4>
                <br />
                <Checkbox
                  value="checkedA" /> $500 to $1500
                <br />
                <Checkbox
                  value="checkedA" /> $1500 and above
                <br />
                <Checkbox
                  value="checkedA" /> $500 and below
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid style={{ background: "#fff" }} item lg={9} md={9} sm={12} xs={12}>
          <div>
            <ProductList categoryName={category} />
            <ToastMessageContainer />
          </div>
        </Grid>
      </Grid>
      <ToastMessageContainer />
    </div>
  );
}

export default ProductsPage;
