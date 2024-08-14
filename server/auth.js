const express = require("express");
const cors = require("cors"); // Import cors
const User = require("./models/user");

const app = express();

// Use cors middleware
app.use(cors()); // Allow all origins by default

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define your routes
app.post("/api/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, confirmPassword } =
      req.body;

    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or username already in use" });
    }

    // Create a new user
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
    console.error("Error during signup:", error); // Log the error
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
