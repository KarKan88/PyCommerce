const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const _DBUrl =
  process.env.DB ||
  "mongodb+srv://subash:root@cluster0.cw4sfgd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(`Error : ${err}`));
