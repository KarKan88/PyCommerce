import React from "react";
import {
  makeStyles,
  Box,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const useStyle = makeStyles((theme) => ({
  list: {
    paddingTop: 30,
    display: "none",
    width: "50vw",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  listItem: {
    color: "#000",
  },
  icon: {
    color: "#222",
  },
  text: {
    color: "#000",
    width: 500,
  },
  badge: {
    display: "inline-block",
    marginRight: "10%",
  },
}));

const ListMenu = ({ handleClose }) => {
  const classes = useStyle();

  return (
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.text}>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText className={classes.text}>Login</ListItemText>
          </ListItem>
        </Link>
        <>
          <Link to="/profile">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText className={classes.text}>My Account</ListItemText>
            </ListItem>
          </Link>
          <Link to="/orders">
            <ListItem button>
              <ListItemIcon>
                <InfoRoundedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.text}>Orders</ListItemText>
            </ListItem>
          </Link>
          <Link to="/favorites">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText className={classes.text}>Favorites</ListItemText>
            </ListItem>
          </Link>
        </>
        <Link to="/cart">
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText className={classes.text}>Cart</ListItemText>
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default ListMenu;
