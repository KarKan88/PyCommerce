/*
* @author: Indu Munagapati
* Component of Manage Addresses page
*/

import {
  Typography,
  Grid,
  Card,
  CardContent,
  makeStyles
} from "@material-ui/core";
import Sidebar from "./sidebar";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 6%",
    display: "flex",
  },
  header: {
    padding: "20px 40px",
    fontSize: 18,
    fontWeight: 500,
    borderBottom: "1px solid #e0e0e0",
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.between(0, 960)]: {
      paddingRight: 0,
      marginBottom: 20,
    },
  },
}));

function ManageAddress() {

  const classes = useStyles();
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
          <Sidebar />
        </Grid >
        <Grid style={{ background: "#fff" }} item lg={9} md={9} sm={12} xs={12}>
          <Card elevation={0}>
            <Typography className={classes.header}>
              My Addresses
            </Typography>
            <CardContent>
              <Typography
                variant="p"
                style={{ padding: "1%" }}
                align="left">
                {`Default Address : Halifax, Nova Scotia`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ManageAddress;
