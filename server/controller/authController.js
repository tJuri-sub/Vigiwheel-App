const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is workng");
};

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    //validation for firstname
    if (!firstname) {
      return res.json({
        error: "firstname is required",
      });
    }
    //validation for lastname
    if (!lastname) {
      return res.json({
        error: "lastname is required",
      });
    }
    //validation for username
    if (!username) {
      return res.json({
        error: "username is required",
      });
    }
    //validation for password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it should atleast 6 characters long",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken Already",
      });
    }

    const hashedPassword = await hashPassword(password);
    //create user in database
    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login end point
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    //Check if user exist
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        error: "no user found",
      });
    }

    //Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "password do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies; // Extract token from cookies
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    // Assuming user information is needed from the database
    User.findById(user.id)
      .select("firstname lastname username") // Fetch necessary fields
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json(userData); // Send user data
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Server error" });
      });
  });
};

const logoutUser = (req, res) => {
  res.clearCookie("token"); // Clear the cookie
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
