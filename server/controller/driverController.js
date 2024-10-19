const Driver = require("../models/drivers");

const driversInfo = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      sex,
      birthdate,
      email,
      status,
      phonenumber,
      licensenumber,
    } = req.body;

    if (!firstname) {
      return res.json({
        error: "firstname is required",
      });
    }

    if (!lastname) {
      return res.json({
        error: "lastname is required",
      });
    }

    if (!sex) {
      return res.json({
        error: "sex is required",
      });
    }

    if (!birthdate) {
      return res.json({
        error: "birthdate is required",
      });
    }

    const userId = req.user._id;

    const exist = await Driver.findOne({ email });

    if (exist) {
      return res.json({
        error: "email is taken Already",
      });
    }

    if (!status) {
      return res.json({
        error: "status is required",
      });
    }

    if (!phonenumber) {
      return res.json({
        error: "phonenumber is required",
      });
    }

    if (!licensenumber) {
      return res.json({
        error: "licesnsenumber is required",
      });
    }

    const driver = await Driver.create({
      firstname,
      lastname,
      sex,
      birthdate,
      email,
      status,
      phonenumber,
      licensenumber,
      user: userId,
    });

    return res.json(driver);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while processing your request.",
    });
  }
};

// const getDriversForUser = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const drivers = await Driver.find({ user: userId });
//     res.json(drivers);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching drivers." });
//   }
// };

module.exports = {
  driversInfo,
  //getDriversForUser,
};
