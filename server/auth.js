const express = require("express");
const User = require("./models/user");

const app = express();
app.use(express.json());

app.post("/api/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, confirmPassword } =
      req.body;

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
