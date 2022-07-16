const OrderDetails = require("../models/order-details-model");
const ObjectId = require('mongoose').Types.ObjectId; 
const createOrderDetails = async (req, res) => {
    try {
        const orderDetails = new OrderDetails(req.body);
        await orderDetails.save();
        res.send();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const userId = req.query.id;
        const filter = { userId : userId }
        const result = await OrderDetails.find(filter);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = {
    createOrderDetails,
    getOrderDetails
}