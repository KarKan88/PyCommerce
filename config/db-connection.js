const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const _DBUrl = process.env.DB || 'mongodb+srv://admin:WuKong%400880@rawdb.cjb0o.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connection Successful")).catch((err) => console.log(`Error : ${err}`));
