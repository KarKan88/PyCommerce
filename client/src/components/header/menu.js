import React from "react";
import { Button, makeStyles, Box, Typography } from "@material-ui/core";
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
  login_btn: {
    color: "#222",
    fontWeight: 600,
    textTransform: "capitalize",
    cursor: "pointer",
    borderRadius: 2,
    height: 35,
    padding: "5px 35px",
    border: "1px solid #dbdbdb",
    boxShadow: "none"
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
    <Button variant="contained" style={{
      backgroundColor: "#fff"}} className={classes.login_btn}>
      Login
    </Button>
    
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
        <ShoppingCartIcon />
        <Typography className={classes.menu_cart}>Cart</Typography>
      </Box>
    </Link>
  </Box>;
}

export default Menu;