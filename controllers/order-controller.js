const OrderDetails = require("../models/order-details-model");
const ObjectId = require('mongoose').Types.ObjectId;
const nodemailer = require("nodemailer");


const mail = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: "sportify5709@gmail.com",
        pass: "xjsyafmmwglbafsf",
    },
});

const sendOrderConfirmationEmail = async (req, res) => {
    try {
        const mailContent = {
            from: emailAddress,
            to: request.body.email,
            subject: "Order Confirmation ",
            html: `<p>Hey ${request.body.firstName}, your user account created successfully but you have to verify your account. Link to verify is below: <br/> <a href=${mailUrl}/verify-account?token=${jwtToken}>Verify Now</a><br/> Thanks, Sportify Team</p>`,
        };

        mail.sendMail(mailContent, function (error, info) {
            if (error) {
                console.log(error);
                response.status(200).json({
                    message: "Account registered successfully, but mail not send",
                });
            } else {
                response
                    .status(200)
                    .json({ message: "Account registered successfully" });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

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
        const filter = { userId: userId }
        const result = await OrderDetails.find(filter);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

const updateOrderDetails = async (req, res) => {
    try {
        OrderDetails.findByIdAndUpdate(req.body._id, req.body, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send('Succesfully saved.');
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = {
    createOrderDetails,
    getOrderDetails,
    updateOrderDetails,
    sendOrderConfirmationEmail
}