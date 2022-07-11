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
  createPaymentIntent
} = require("../controllers/favorites-controller");

const {
  verifyEmailAddress,
  userRegistration,
  userLogin,
  forgotPassword,
  sellerRegistration
} = require("../controllers/user-controller");

const {verifyJWT} = require("../authentication/authentication");

const router = express.Router();

router.post("/register", userRegistration);
router.post("/verifyemail", verifyEmailAddress);
router.post("/login", userLogin);
router.post("/forgotpassword", forgotPassword);
router.post("/sellerregistration", verifyJWT, sellerRegistration);

router.get("/products/get-products", getProducts);
router.get("/products/get-products/:categoryName", getProductsByCategory);
router.get("/products/get-product/:id", getProductById);
router.post("/products/add-product", addProduct);

router.post("/favorites/add-item", addItemFavorites);
router.post("/create-payment-intent", createPaymentIntent);
router.delete("/favorites/remove-item", removeItemFavorites);
router.get("/favorites/get-items/:id", getFavoritesItems);

module.exports = router;
