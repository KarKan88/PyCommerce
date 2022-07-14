/*
 * @author: Dhruvrajsinh Omkarsinh Vansia
 */

const mongoose = require("mongoose");
const Cart = require("../models/cart-model");

const addItem = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const removeItem = async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const productId = mongoose.Types.ObjectId(req.body.productId);
    // const qty = req.body.qty;
    await Cart.findOneAndRemove({ userId: userId, productId: productId });
    res.send();
  } catch (error) {
    console.log(error);
    res.status(204).send();
  }
};

const getCartItems = async (req, res) => {
  try {
    const uId = mongoose.Types.ObjectId(req.params.id);
    const cartItems = await Cart.aggregate([
      {
        $match: {
          userId: uId,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "productDetails",
        },
      },
    ]);
    res.json(cartItems);
  } catch (error) {
    console.log("Hello: ", error);
    res.status(500).send();
  }
};

const updateQuantity = async (req, res) => {

  // console.log("uQ!: ", req.body)
  const filter = { userId : mongoose.Types.ObjectId(req.body.userId),  productId : mongoose.Types.ObjectId(req.body.productId)}
  const update = {  qty : req.body.qty }
  // console.log("UQ", filter, update)
 try{
  const updated = await Cart.findOneAndUpdate(filter,{$set: update}, {returnNewDocument: true})
    // console.log("updatedd: ", updated )
    res.json(updated)

 }catch(error){
  console.log(error)
 }
};

module.exports = { addItem, getCartItems, removeItem, updateQuantity };
