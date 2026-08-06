import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";

// protects routes by checking if a user is authenticated
export default function ProtectedRoute({ role }) {
  // gets current authentication state from AuthContext
  const { user } = useAuth();
  // if no user is loggined in, redirect them to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }
  // checks if the user has the required role for this route
  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }
  // if authentication and role chcecks pass, allow access to the protected page
  return <Outlet />;
}
