import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
  const context = useContext(AuthContext);
  // safety check
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
