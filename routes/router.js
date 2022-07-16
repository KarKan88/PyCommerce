const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
  getProductsByCategory,
} = require("../controllers/product-controller");

const {
  addItemToFavorites,
  removeItemFromFavorites,
  getFavoritesItems,
} = require("../controllers/favorites-controller");

const {
  verifyEmailAddress,
  userRegistration,
  userLogin,
  forgotPassword,
  sellerRegistration,
} = require("../controllers/user-controller");

const {
  addItem,
  removeItem,
  getCartItems,
  updateQuantity,
} = require("../controllers/cart-controller");

const { addCost } = require("../controllers/checkout-controller");

const {
  listCoupons,
  addCoupon,
  deleteCouponById,
  updateCouponById
} = require("../controllers/coupon-controller");

const {
  addInventoryProduct,
  viewInventoryProduct,
  updateInventoryProductById,
  deleteInventoryProductsById,
  getInventoryProductById
} = require("../controllers/inventory-controller");

const {
  addComment,
  getCommentByProductId,
} = require("../controllers/comment-controller");

const {
  getUserDetails,
  changePassword,
  updatePhoneNumber
} = require("../controllers/profile-info-controller");

const { verifyJWT } = require("../authentication/authentication");

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

router.post("/favorites/add-item", addItemToFavorites);
router.delete("/favorites/remove-item", removeItemFromFavorites);
router.get("/favorites/get-items/:id", getFavoritesItems);

router.post("/addcomment", addComment);
router.get("/getcomment/:id", getCommentByProductId);

router.post("/cart/add-item", addItem);
router.delete("/cart/remove-item", removeItem);
router.get("/cart/get-items/:id", getCartItems);
router.patch("/cart/item/updatequantity", updateQuantity);

router.post("/checkout", addCost);

router.get("/coupons/list-coupons", listCoupons);
router.post("/coupons/add-coupon", addCoupon);
router.put("/coupons/update-coupon/:id", updateCouponById);
router.delete("/coupons/delete-coupon/:id", deleteCouponById);

router.post("/inventory/add-product", addInventoryProduct);
router.put("/inventory/update-product/:id", updateInventoryProductById);
router.delete("/inventory/delete-product/:id", deleteInventoryProductsById);
router.get("/inventory/product/:id", getInventoryProductById);

router.get("/inventory/products", viewInventoryProduct);

router.get("/userinfo/:id", getUserDetails);
router.post("/changepassword", changePassword);
router.post("/updatephonenumber", updatePhoneNumber);

module.exports = router;
