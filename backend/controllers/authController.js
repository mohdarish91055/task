import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();

//register user
export const registerUser = async (req, res) => {
  const { username, password,role } = req.body;
  try {
    if (!username || !password) {
      return res.send({
        message: "Please provide username and password",
      });
    }

    //check if user is already exist
    const exitUser = await User.findOne({ username });
    if (exitUser) {
      return res.send({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      role
    });
    await user.save();
    console.log(`@{username} registered`);
    res.status(201).send({
      success: true,
      message: "New user registered",
    });
  } catch (error) {
    console.log("error in registeraton", error);
    res.status(500).send({
      message: "error in registration",
    });
  }
};

//login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).send({
        message: "Please provide username and password",
      });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        message: "Invalid username or password",
      });
    }

    // Generate JWT token if login is successful
    const token = jwt.sign({ 
    id: user._id,
    role: user.role,    
    username: user.username
 }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    console.log(`user login successfully`);

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username ,role:user.role},
      token,
    });
  } catch (error) {
    console.log("error in login", error);
    res.status(500).send({
      message: "error in login",
    });
  }
};

//logout user
export const logoutUser = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
  console.log(`user logout successfully`);
};



