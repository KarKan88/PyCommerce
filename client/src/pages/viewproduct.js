import React, { useState, useEffect } from "react";
// import Upload from "../components/upload.png";
import { Grid, makeStyles, Form } from "@material-ui/core";
import Sidebar from "../components/profile/seller-sidebar";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
    paddingTop: "56.25%", // 16:9
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

function ViewProduct(props) {


  const [data, setData] = useState([]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useHistory();


  useEffect(() => {
    // Update the document title using the browser API
    if (localStorage.getItem("productData")) {
      let values = JSON.parse(localStorage.getItem("productData"));
      if (values.length > 0) {
        if (JSON.stringify(data) != JSON.stringify(values)) {
          setData(values);
          console.log(data);
        }
      }
    }
  });

  const routeToEdit = (id) => {
    console.log(id)
    navigate.push('/edit-product/'+id)

  }
  const deleteProduct = (index) => {
    let deletedData = data;
    deletedData.splice(index, 1);

    setTimeout(() => {
      localStorage.setItem("productData", JSON.stringify(deletedData));
      setData(JSON.parse(localStorage.getItem("productData")));
    }, 1000);
  };

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
      </Grid>
      <Grid style={{ background: "#fff" }} item lg={9} md={9} sm={12} xs={12}>
        <Grid container className={classes.component} spacing={3}>
          {data.map((item, index) => (
            <Grid
              key={index}
              style={{ background: "#fff" }}
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
            >
              <div classname="">
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      #{item.serialNo}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.name} ({item.category})
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Qty : {item.quantity}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price : {item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Discount : {item.discount}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing className="">
                    <div className="mx-2">
                      <Button style={{ backgroundColor: "#EB853B", marginTop: 20, color: "#222", fontWeight: 600,marginRight:10 }}
                        size="small"
                        
                        variant="contained"
                        type="submit"
                        color="primary"
                        className=""
                        onClick={() => deleteProduct(index)}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="mx-2">
                      <Button style={{ backgroundColor: "#FFBB38", marginTop: 20, color: "#222", fontWeight: 600, marginRight:10 }}
                        size="small"
                        variant="contained"
                        type="submit"
                        color="primary"
                        className=""
                        onClick={()=>routeToEdit(item.id)}
                      >
                        Edit
                      </Button>
                    </div>

                    {/* <IconButton aria-label="share">
                      <EyeIcon />
                    </IconButton> */}
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewProduct;
