import User from "../models/User.js";
// gets the current authenticated user
export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({
      role: "employee",
    }).select("name email");

    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};