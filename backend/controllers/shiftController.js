export const createShift = async (req, res) => {
  try {
    // validate required fields
    const { employee, department, startTime, endTime, notes } = req.body;
    if (!employee || !department || !startTime || !endTime) {
      res.status(400).json({
        message: "All required fields must be provided",
        error: error.message,
      });
    }
    // validate time
    if (new Date(startTime) >= new Date(endTime)) {
      res.status(400).json({
        message: "Start time must be before end time",
        error: error.message,   
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
