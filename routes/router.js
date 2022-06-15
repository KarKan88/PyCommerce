const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
  getProductsByCategory,
} = require("../controllers/product-controller");

const {
  addItem: addItemFavorites,
  removeItem: removeItemFavorites,
  getFavoritesItems,
} = require("../controllers/favorites-controller");

const router = express.Router();

router.get("/products/get-products", getProducts);
router.get("/products/get-products/:categoryName", getProductsByCategory);
router.get("/products/get-product/:id", getProductById);
router.post("/products/add-product", addProduct);

router.post("/favorites/add-item", addItemFavorites);
router.delete("/favorites/remove-item", removeItemFavorites);
router.get("/favorites/get-items/:id", getFavoritesItems);

module.exports = router;
