import React from "react";

import { Box, makeStyles, Typography, Grid, Button } from "@material-ui/core";
import CartItem from "../components/cart/CartItem";
import TotalView from "../components/cart/TotalView";
import Carousel from "react-material-ui-carousel";
import ProductRow from "../components/product/product-grid";

import "../styles/home-page.css";
import "react-toastify/dist/ReactToastify.min.css";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    component: {
        marginTop: 65,
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
    placeOrderViewAll: {
        display: "flex",
        background: "#222",
        color: "#fff",
        borderRadius: 2,
        width: 250,
        height: 51,
    },
    banner: {
        margin: "20px 10px 0px 10px",
        minWidth: 960,
        textAlign: "center",
    },
    banner_img: {
        width: "70%",
        height: 480,
        cursor: "pointer",
    },
}));

function CartPage() {
    const classes = useStyle();
    const history = useHistory();

    const cartItems = [{
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
                shortTitle: "Gaming chair",
                longTitle: "Gaming chair",
            },
            price: {
                mrp: 500,
                cost: 400,
                discount: 20,
            },
            qty: 1,
            category: "furniture",
            tagline: "chair",
            url: "https://m.media-amazon.com/images/I/61ag4d3mKyL._AC_SX679_.jpg",
        },
        {
            title: {
                shortTitle: "LG moniter",
                longTitle: "LG moniter",
            },
            price: {
                mrp: 500,
                cost: 399,
                discount: 20,
            },
            qty: 1,
            category: "electronics",
            tagline: "moniter",
            url: "https://m.media-amazon.com/images/I/61pI7loWpZS._AC_SX679_.jpg",
        },
    ];

    const sliderItems = cartItems.length > 2 ? 2 : cartItems.length;
    const items = [];

    for (let i = 0; i < cartItems.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push( <
                Grid container key = { i } > {
                    cartItems.slice(i, i + sliderItems).map((da, i) => {
                        return <CartItem key = { i.toString() }
                        item = { da }
                        />;
                    })
                } <
                /Grid>
            );
        }
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const placeOrder = () => {
        history.push('/shipping')
    }
    return ( <
        >
        <
        br / >
        <
        Grid container className = { classes.component } >
        <
        Grid style = {
            { paddingBottom: "30px", paddingLeft: "20px", width: "75%" }
        } >
        <
        Box className = { classes.header } >
        <
        Typography style = {
            { fontWeight: 600, fontSize: 18 }
        } >
        My Cart({ cartItems ? .length }) <
        /Typography> < /
        Box >

        <
        Grid container spacing = { 0 }
        direction = "column"
        alignItems = "center"
        justifyContent = "center"
        style = {
            {
                backgroundColor: "#fff",
            }
        } >
        <
        Carousel swipeable = { true }
        draggable = { false }
        showDots = { false }
        responsive = { responsive }
        ssr = { true }
        infinite = { true }
        autoPlay = { false }
        autoPlaySpeed = { 2500 }
        keyBoardControl = { true }
        customTransition = "all 200ms"
        transitionDuration = { 500 }
        containerClass = "carousel-container"
        removeArrowOnDeviceType = {
            ["mobile"]
        }
        dotListClass = "custom-dot-list-style"
        itemClass = "carousel-item-padding-40-px" > { items } <
        /Carousel> < /
        Grid >

        <
        Grid container style = {
            {
                backgroundColor: "#fff",
                padding: "10px 10px 10px 10px",
            }
        } >

        <
        Button variant = "contained"
        className = { classes.placeOrder }
        style = {
            {
                backgroundColor: "#EB853B",
                color: "#222",
                fontWeight: 600,
            }
        }
        onClick = { placeOrder } >
        Place Order <
        /Button> < /
        Grid > <
        /Grid> <
        Grid style = {
            { paddingLeft: "2em" }
        }
        display = "flex" >
        <
        TotalView cartItems = { cartItems }
        /> < /
        Grid > <
        /Grid> <
        Grid >
        <
        ProductRow title = "Frequently bought together"
        categoryName = "electronics" /
        >
        <
        /Grid> < /
        >
    );
}

export default CartPage;