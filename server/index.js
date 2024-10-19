const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

//db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not COnnected", err));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // This allows cookies to be sent across domains
  })
);

//midware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server is running port on ${port}`));
