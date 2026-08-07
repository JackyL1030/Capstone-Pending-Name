import express from "express";
import { getMe,getEmployees } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router();

// checks authentication. If valid, run controller
router.get("/me", protect, getMe);
router.get("/",protect,getEmployees);

export default router;