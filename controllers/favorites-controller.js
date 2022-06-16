const mongoose = require("mongoose");
const Favorites = require("../models/favorites-model");

const addItem = async (req, res) => {
  try {
    const favorites = new Favorites(req.body);
    await favorites.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
const stripe = require("stripe")('sk_test_51LB9csLWgSkDs7S6yUq1qanGbDEpa6WEa10pdmp5QM6su0PPBQ5A610MThjSwE0HoaZw2g4cR7tQFmlJggF4FsfQ00XZUh1zTx');

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

const createPaymentIntent = async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "cad",
    payment_method_types: ["card", "afterpay_clearpay"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

const removeItem = async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const productId = mongoose.Types.ObjectId(req.body.productId);
    await Favorites.deleteOne({ userId: userId, productId: productId });
    res.send();
  } catch (error) {
    console.log(error);
    res.status(204).send();
  }
};

const getFavoritesItems = async (req, res) => {
  try {
    const uId = mongoose.Types.ObjectId(req.params.id);
    const items = await Favorites.aggregate([
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
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = { addItem, getFavoritesItems, removeItem, createPaymentIntent };
