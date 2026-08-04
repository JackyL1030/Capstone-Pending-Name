import express from "express";
import { getMe } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router();

// checks authentication. If valid, run controller
router.get("/me", protect, getMe);

export default router;