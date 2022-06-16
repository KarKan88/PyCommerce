import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect } from "react";
// import { getProductsByCategory } from "../../actions/product-action";

// import "../../styles/product-page.css";

const useStyles = makeStyles({
  row_wrapper: {
    width: "100%",
    minWidth: 960,
    margin: "5px 3px",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  row_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "10px 1%",
  },
  row_title: {
    fontSize: 30,
    fontWeight: 500,
  },
  row_header_subtitle: {
    fontSize: 14,
    opacity: 0.7,
    fontWeight: 400,
  },
  products_wrapper: {
    flex: "85%",
    width: "85%",
    margin: "5px 10px",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  leftContainer: {
    textAlign: "center",
  },
  product_title: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 10,
    color: "#212F3D",
  },
  product_discount: {
    fontSize: 14,
    color: "#222",
    paddingTop: 5,
  },
  product_tagline: {
    fontSize: 14,
    opacity: 0.7,
    paddingTop: 5,
    color: "#212F3D",
  },
});

function ProductRow() {

    const recommendatedProducts = [
        {
          title: {
            shortTitle: "Logitech Keyboard",
            longTitle: "Dell keyboard",
          },
          price: {
            mrp: 20,
            cost: 10,
            discount: 50,
          },
          qty: 1,
          category: "electronics",
          tagline: "keyboard",
          url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8&w=1000&q=80",
        },
        {
          title: {
            shortTitle: "Gaming keyboard",
            longTitle: "Dell G4 I7-9th gen",
          },
          price: {
            mrp: 80,
            cost: 70,
            discount: 15,
          },
          qty: 1,
          category: "electronics",
          tagline: "keyboard",
          url: "https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SY355_.jpg",
        },
        {
          title: {
            shortTitle: "Dell mouse",
            longTitle: "Dell mouse",
          },
          price: {
            mrp: 50,
            cost: 40,
            discount: 22,
          },
          qty: 1,
          category: "electronics",
          tagline: "mouse",
          url: "https://www.shoprbc.com/images/products/rbc_icecat/021/8092021_2432712051.jpg",
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
        {
            title: {
              shortTitle: "Computer Desk",
              longTitle: "Desk",
            },
            price: {
              mrp: 50,
              cost: 39,
              discount: 20,
            },
            qty: 1,
            category: "furniture",
            tagline: "furniture",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-eUoaqU5s1W4jFt7Zuw3Z4ihma9zNE6gAg&usqp=CAU",
          },
      ];

  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 50, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      className={classes.row_wrapper}>
      <Box className={classes.row_container}>
        <Box className={classes.leftContainer}>
          <h2 className={classes.row_title}>Frequently bought together products</h2>
        </Box>
        <Box className={classes.products_wrapper} textAlign="center">

            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              keyBoardControl={true}
              customTransition="all 200ms"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px">
              {recommendatedProducts?.map((product, index) => (
                <Box key={index}>
                  {/* <Link to={`product/${product._id}`}> */}
                    <img
                      className={`product_img reduce_margin`}
                      src={product.url}
                      alt="banner"/>
                    <Typography className={classes.product_title}>
                      {product.title.shortTitle}
                    </Typography>
                    <Typography className={classes.product_discount}>
                      {product.discount}
                    </Typography>
                    <Typography className={classes.product_tagline}>
                      {product.tagline}
                    </Typography>
                  {/* </Link> */}
                </Box>
              ))}
            </Carousel>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductRow;