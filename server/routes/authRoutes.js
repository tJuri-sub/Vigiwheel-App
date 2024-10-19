const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controller/authController");
const {
  driversInfo,
  getDriversForUser,
} = require("../controller/driverController");
//const authMiddleware = require("../middleware/authMw");

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", getProfile);

router.post("/drivers", driversInfo);
//router.get("/drivers", getDriversForUser);

module.exports = router;
