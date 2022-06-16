import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

import clsx from "clsx";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";


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

export default function Sidebar() {
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname;

  const activeStyle = {
    fontWeight: 500,
    color: "#222",
    backgroundColor: "#F0F0F0",
  };
  return (
    <>
      <Box className={classes.bottom}>
        <Box className={classes.sideBarLink}>
          <p>Menu</p>
        </Box>
        <Box className={classes.subMenu}>
          <Link to="/add-product">
            <Typography
              className={clsx(classes.subLink, classes.hoverTab)}
              style={currentPath === "/add-product" ? activeStyle : {}}>
              Add Products
            </Typography>
          </Link>
          <Link to="/view-product">
            <Typography
              className={clsx(classes.subLink, classes.hoverTab)}
              style={currentPath === "/view-product" ? activeStyle : {}}>
              View Products
            </Typography>
          </Link>
          {/* <Link to="/editproduct">
            <Typography
              className={clsx(classes.subLink, classes.hoverTab)}
              style={currentPath === "/editproduct" ? activeStyle : {}}>
              Edit Products
            </Typography>
          </Link> */}
        </Box>
        <Divider className={classes.divider} />

        <Box
          className={clsx(classes.sideBarLink, classes.hoverTab)}
          style={{ cursor: "pointer" }}>
          
            {/* <div className="d-flex"> */}
            <PowerSettingsNewIcon className={classes.sideBarLinkIcon} />
            <Link to="/">
            <p style={{ color:"black"}}>Logout</p>
            </Link>
            {/* </div> */}
            
          
        </Box>
      </Box>
    </>
  );
}