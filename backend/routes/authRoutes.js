import express from "express";
const router = express.Router();
import { registerUser, loginUser,logoutUser } from "../controllers/authController.js";
import { authMiddleware,admin } from "../middlewares/authmiddleware.js";
import { getAllUsers,deleteUser } from "../controllers/adminController.js";
import { profile } from "../controllers/userController.js";

//new register user
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

//logout
router.post("/logout", logoutUser);

// Protected routes
router.get('/profile/:id', authMiddleware, profile);

//all users 
router.get('/users',authMiddleware,admin, getAllUsers);

// Admin-only route
router.delete('/user/:id', authMiddleware, admin, deleteUser);
  
  export default router;

