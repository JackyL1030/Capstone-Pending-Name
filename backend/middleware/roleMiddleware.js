export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Check if the authenticated user's role is allowed
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    // User has permission
    next();
  };
};
