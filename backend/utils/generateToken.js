import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  // create token
  const payload = {
    id: user._id, //identifies the authenticated user
    role: user.role, // supports role-based access control
    department: user.department, //supports department-specific authority 
  };
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
        expiresIn: "7d",  // prevents token from lasting forever 
    }
  )
};