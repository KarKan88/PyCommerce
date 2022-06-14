import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles(theme => ({
  headerMenu: {
    display: "flex",
    alignItems: "center",
    margin: "0 7% 0 auto",
    "& > *": {
      marginRight: 30
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  menu_link: {
    display: "flex"
  },
  menu_more: {
    fontSize: "1rem",
    fontWeight: 500,
    TextDecoration: "none"
  },
  menu_cart: {
    marginLeft: "5px",
    fontSize: "1rem",
    fontWeight: 500,
    TextDecoration: "none"
  }
}));

function Menu() {
  const classes = useStyles();

  return <Box className={classes.headerMenu}>
    <Link to="/favorites">
      <Box className={classes.menu_link}>
        <Typography className={classes.menu_more}>Profile</Typography>
      </Box>
    </Link>

    <Link to="/">
      <Box className={classes.menu_link}>
        <Typography className={classes.menu_more}>Become a Seller</Typography>
      </Box>
    </Link>

    <Link to="/">
      <Box className={classes.menu_link}>
        <Typography className={classes.menu_more}>More</Typography>
        <ExpandMoreIcon />
      </Box>
    </Link>
    <Link to="/">
      <Box className={classes.menu_link}>
        <ShoppingCartIcon />
        <Typography className={classes.menu_cart}>Cart</Typography>
      </Box>
    </Link>
  </Box>;
}

export default Menu;