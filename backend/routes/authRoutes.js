import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// route for creating a new user account
router.post("/register", register);
// route for authenticating an existing user
router.post("/login", login);

export default router;
