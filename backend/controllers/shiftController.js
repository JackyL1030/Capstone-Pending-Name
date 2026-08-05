import Shift from "../models/Shift.js";

export const createShift = async (req, res) => {
  try {
    // validate required fields
    const { employee, department, startTime, endTime, notes } = req.body;
    if (!employee || !department || !startTime || !endTime) {
      res.status(400).json({
        message: "All required fields must be provided",
      });
    }
    // ensure the shift starts before it ends
    if (new Date(startTime) >= new Date(endTime)) {
      res.status(400).json({
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
        return res.status(400).json({
          message: "Employee already has a conflicting shift",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
