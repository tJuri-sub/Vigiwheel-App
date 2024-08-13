require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((error) => {
    console.log("error connecting to mongodb", error.message);
  });
