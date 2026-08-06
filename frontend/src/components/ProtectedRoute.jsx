import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";

// protects routes by checking if a user is authenticated
export default function ProtectedRoute() {
  // gets current authentication state from AuthContext
  const { user } = useAuth();
  // if no user is loggined in, redirect them to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }
  // if user exists, allow access to the protected page
  return <Outlet />;
}
