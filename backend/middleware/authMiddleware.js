import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    // Check if authorization header exists before trying to read token
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Not authorized, no token provided",
      });
    }
    // split the token
    const token = req.headers.authorization.split(" ")[1];
    // verifying token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    // store authenticated user's information
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Not authorized, invalid token",
      error: error.message,
    });
  }
};
