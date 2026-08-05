import Shift from "../models/Shift.js";
import Department from "../models/Department.js";

export const createShift = async (req, res) => {
  try {
    // validate required fields
    const { employee, department, startTime, endTime, notes } = req.body;
    if (!employee || !department || !startTime || !endTime) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }
    // ensure the shift starts before it ends
    if (new Date(startTime) >= new Date(endTime)) {
      return res.status(400).json({
        message: "Start time must be before end time",
      });
    }
    // check for conflicting shift overlap
    const existingShifts = await Shift.find({ employee });
    for (const shift of existingShifts) {
      if (
        new Date(startTime) < shift.endTime &&
        new Date(endTime) > shift.startTime
      ) {
        return res.status(409).json({
          message: "Employee already has a conflicting shift",
        });
      }
    }
    // creating the shift
    const shift = await Shift.create({
      employee,
      department,
      startTime,
      endTime,
      notes,
    });
    res.status(201).json(shift);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getShifts = async (req, res) => {
  try {
    let shifts;
    if (req.user.role === "manager") {
      // populate replaces IDs with the referenced documents
      shifts = await Shift.find({ department: req.user.department })
        .populate("employee", "name email")
        .populate("department", "name");
    } else {
      shifts = await Shift.find({ employee: req.user.id })
        .populate("employee", "name email")
        .populate("department", "name");
    }
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getShiftById = async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id).populate("employee", "name email").populate("department", "name");
    if (!shift) {
      return res.status(404).json({ message: "Shift not found" });
    }
    res.status(200).json(shift);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
