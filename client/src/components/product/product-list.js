/*
* @author: Adesh Nalpet Adimurthy
*/

import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { getProductsByCategory } from "../../actions/product-action";

import "../../styles/product-page.css";
import StarIcon from "@material-ui/icons/Star";

const useStyle = makeStyles({
    component: {
        padding: "20px 20px",
        borderBottom: "1px solid #e0e0e0",
        borderRadius: 0,
        display: "flex",
    },
    products: {
        backgroundColor: "#fff"
    },
    itemWrapper: {
        display: "flex",
        alignItems: "center",
        color: "#000",
        "&:hover": {
            cursor: "pointer",
            "& $itemTitle": {
                color: "#222",
            },
        },
    },
    itemTitle: {
        color: "#000",
    },
    image: {
        height: 210,
        width: 210,
        marginRight: 120,
        objectFit: "contain",
    },
    mid: {
        margin: 20,
    },
    greyTextColor: {
        color: "#000",
        fontSize: 14,
        marginLeft: 5,
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 22,
        fontWeight: 500,
    },
    remove: {
        opacity: "0.4",
        cursor: "pointer",
    },
    rightComponent: {
        marginLeft: "auto",
    },
    rate: {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        padding: "2px 5px",
        borderRadius: 5,
        fontWeight: 600,
        fontSize: 12,
        backgroundColor: "#4BBC57",
    },
});

function ProductList({ categoryName }) {
    const classes = useStyle();
    useEffect(() => {
        getProductsByCategory(categoryName).then((data) => {
            setLoadedProducts(data);
        });
    }, [categoryName]);

    var rate = (Math.random() * 5).toFixed(1);
    var reviewCount = Math.round(Math.random() * 10000 + 1);
    if (rate < 3) {
        rate = 3.4;
    }

    const [loadedProducts, setLoadedProducts] = useState([]);

    return (
        <>
            <div className={classes.products}>
                {loadedProducts?.map((item, index) => (
                    <Box className={classes.component} key={index}>
                        <Link to={`/product/${item._id}`}>
                            <Box className={classes.itemWrapper}>
                                <img src={item.url} className={classes.image} />
                                <Box className={classes.itemInfo}>
                                    <Typography className={classes.itemTitle}>
                                        {item.title.longTitle && item.title.longTitle}
                                    </Typography>
                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                        <Typography className={classes.rate}>
                                            {rate} <StarIcon style={{ fontSize: 12, marginLeft: 3 }} />
                                        </Typography>
                                        <Typography className={classes.greyTextColor}>
                                            ({reviewCount})
                                        </Typography>
                                    </Box>
                                    <Typography style={{ margin: "15px 0" }}>
                                        <span className={classes.price}>${item.price.cost}</span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span className={classes.greyTextColor}>
                                            <strike>${item.price.mrp}</strike>
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span style={{ color: "#222" }}>
                                            {item.price.discount}% off
                                        </span>
                                    </Typography>
                                    <Typography style={{ margin: "15px 0" }}>
                                        <span>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, </span><br/>
                                        <span>• sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span><br/>
                                        <span>• Ut enim ad minim veniam</span><br/>
                                        <span>• Sed ut perspiciatis unde omnis iste natus error sit voluptatem</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </div>
        </>
    );
}

export default ProductList;
