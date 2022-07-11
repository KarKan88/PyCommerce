/*
* @author: Indu Munagapati
*/

const express = require("express");
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

module.exports = router;