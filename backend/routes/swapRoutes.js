import express from "express";
import { createSwapRequest } from "../controllers/swapController.js";
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", protect, createSwapRequest);

export default router;