import React, { useState } from "react";

import { Box, makeStyles, Typography, Grid, Button, Card, SubCategory } from "@material-ui/core";
import CartItem from "../components/cart/CartItem";
import TotalView from "../components/cart/TotalView";
import Carousel from "react-material-ui-carousel";

import "../styles/home-page.css";
import "react-toastify/dist/ReactToastify.min.css";

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "10px 10%",
    display: "flex",
  },
  RightComponent: {
    paddingRight: 15,
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#222",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
  itemRow: {
    padding: "15px 11px 8px 15px",
    background: "#222",
    width: 'calc(107% + 1px)',
  },
}));

function CartPage() {
  const classes = useStyle();

  const cartItems = [
    {
      title: {
        shortTitle: "Dell G3",
        longTitle: "Dell G3 I7-9th gen",
      },
      price: {
        mrp: 1000,
        cost: 900,
        discount: 10,
      },
      qty: 1,
      category: "electronics",
      tagline: "laptop",
      url: "https://miro.medium.com/max/1400/1*2fAtste9D54C_0NgIBJbuA.jpeg",
    },
    {
      title: {
        shortTitle: "Dell G4",
        longTitle: "Dell G4 I7-9th gen",
      },
      price: {
        mrp: 1100,
        cost: 910,
        discount: 30,
      },
      qty: 1,
      category: "electronics",
      tagline: "laptop",
      url: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,0&resMode=sharp2&size=3319,2405",
    },
    {
      title: {
        shortTitle: "Dell G1",
        longTitle: "Dell G1 I5-9th gen",
      },
      price: {
        mrp: 800,
        cost: 600,
        discount: 22,
      },
      qty: 1,
      category: "electronics",
      tagline: "laptop",
      url: "https://miro.medium.com/max/1400/1*2fAtste9D54C_0NgIBJbuA.jpeg",
    },
    {
      title: {
        shortTitle: "Dell G10",
        longTitle: "Dell G10 I3-9th gen",
      },
      price: {
        mrp: 500,
        cost: 399,
        discount: 20,
      },
      qty: 1,
      category: "electronics",
      tagline: "laptop",
      url: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,0&resMode=sharp2&size=3319,2405",
    },
  ];


  const sliderItems = cartItems.length > 2 ? 2 : cartItems.length;
  const items = [];

  for (let i = 0; i < cartItems.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
            <Grid container className="BannerGrid" key={i}>
              {cartItems.slice(i, i + sliderItems).map((da, i) => {
                return <CartItem key={i.toString()} item={da} />;
              })}
            </Grid>

        )
       }
  }

  return (
    <>
        <Grid container className={classes.component} style={{ paddingTop: '30px'}}>
          <Grid style={{ paddingBottom: '30px'}}>
            <Box className={classes.header} >
              <Typography style={{ fontWeight: 600, fontSize: 18 }} >
                My Cart ({cartItems?.length})
              </Typography>
            </Box>

            <Grid
              container
              style={{ padding:"5px 5px 5px 5px"}}>
              <Carousel
                animation="slide"
                interval={10000}
                navButtonsAlwaysVisible={true}
                indicators={true}
                navButtonsProps={{
                  style: {
                    backgroundColor: "#ffffff",
                    borderRadius: 0,
                    color: "#222",
                  },
                }}
              >
                {items}
              </Carousel>
            </Grid>

            <Box className={classes.bottom} >
              <Button
                // onClick={placeOrder}
                variant="contained"
                className={classes.placeOrder}
                style={{ backgroundColor: "#222" }}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid style={{ paddingLeft:'10px'}} display='flex'>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      
    </>
  );
}

export default CartPage;
