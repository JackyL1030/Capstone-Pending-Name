import User from "../models/User.js";

// Get currently logged in user
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .populate("department", "name");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// Get all employees except the logged in employee
export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({
      role: "employee",
      _id: { $ne: req.user.id },
    }).select("name email department");

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
