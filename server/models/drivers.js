const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("../models/user");

const driverSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  maritalstatus: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  licensenumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DriverModel = mongoose.model("Driver", driverSchema);

module.exports = DriverModel;
