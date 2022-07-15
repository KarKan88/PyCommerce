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
  listCoupons,
  addCoupon,
  deleteCouponById,
  updateCouponById,
} = require("../controllers/coupon-controller");

const {
  addComment,
  getCommentByProductId,
} = require("../controllers/comment-controller");

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

console.log("In routes");
router.post("/addcomment", addComment);
router.get("/getcomment/:id", getCommentByProductId);

router.get("/coupons/list-coupons", listCoupons);
router.post("/coupons/add-coupon", addCoupon);
router.put("/coupons/update-coupon/:id", updateCouponById);
router.delete("/coupons/delete-coupon/:id", deleteCouponById);

module.exports = router;
