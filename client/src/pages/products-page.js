import React from "react";
import { makeStyles } from "@material-ui/core";

import ToastMessageContainer from "../components/toast";
import ProductList from "../components/product/product-list";

const useStyles = makeStyles((theme) => ({
  favorites: {
    padding: "30px",
    marginTop: 55
  },
}));

function ProductsPage() {
  const classes = useStyles();

  return (
    <div className={classes.favorites}>
      <ProductList categoryName="" />
      <ToastMessageContainer />
    </div>
  );
}

export default ProductsPage;
