import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import useAuth from "../context/useAuth";

import "../styles/Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // browser does not refresh
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      // Separate the token from the rest of the user data
      const { token, ...user } = data;
      // Save both into AuthContext
      login(user, token);
      // redirecting based on role
      if (user.role === "manager") {
        navigate("/manager");
      } else {
        navigate("/employee");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Flexora</h1>
        <p className="login-subtitle">Employee Shift Management</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
