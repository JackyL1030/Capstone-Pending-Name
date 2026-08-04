import jwt from "jsonwebtoken";

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
    // store authenticated user's information
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Not authorized, invalid token",
      error: error.message,
    });
  }
};
