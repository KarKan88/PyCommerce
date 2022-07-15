/*
* @author: Adesh Nalpet Adimurthy
* MongoDB Database connection details.
*/

const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const _DBUrl = process.env.DB || 'mongodb+srv://meghdootojha:m12345@cluster0.rm5ca.mongodb.net/test';
mongoose
    .connect(_DBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(`Error : ${err}`));