/*
 * @author: Dhruvrajsinh Omkarsinh Vansia
 */

const mongoose = require("mongoose");
const Checkout = require("../models/checkout-model");

const addCost = async (req, res) => {
  try {
    const checkout = new Checkout(req.body);
    await checkout.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = { addCost };