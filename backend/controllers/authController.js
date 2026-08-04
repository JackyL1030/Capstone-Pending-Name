import User from "../models/User.js";
import { generateToken } from "../generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, employeeId, department, phoneNumber } =
      req.body;

    // Used to check whether an account with the same email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      employee,
      department,
      phoneNumber,
    });

    // generate a JWT for the newly registered user 
    const token = generateToken(user);
    // return the creater user's information along with authentication token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
