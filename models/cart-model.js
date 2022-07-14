/*
* @author: Dhruvrajsinh Omkarsinh Vansia
*/

const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  qty: {
    type: Number,
    required: true,  
  }
});

const Cart = new mongoose.model("cart", cartSchema, "cart");

module.exports = Cart;