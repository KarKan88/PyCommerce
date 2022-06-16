import {
    Typography,
    Grid,
    Card,
    Button,
    CardContent,
    FormHelperText,
    TextField,
    makeStyles
} from "@material-ui/core";
import Sidebar from "./sidebar";

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
        </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>     
                <Card >
                    <Typography variant="h5" style={{paddingTop:"2%", paddingLeft:"4%"}}>
                        <b>Addresses</b>
                    </Typography>
                    <CardContent>
                        <Typography 
                        variant="body2" 
                        style={{padding:"1%"}}
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
