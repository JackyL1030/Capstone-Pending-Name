import express from "express";
import { createShift, getShifts, getShiftById } from "../controllers/shiftController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("manager"), createShift);
router.get("/", protect, getShifts);
router.get("/:id", protect, getShiftById);

export default router;
