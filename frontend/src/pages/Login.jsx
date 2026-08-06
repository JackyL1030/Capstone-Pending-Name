import { useState } from "react";
import { loginUser } from "../services/authService";
import useAuth from "../context/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  // browser does not refresh
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      // Separate the token from the rest of the user data
      const { token, ...user } = data;

      // Save both into AuthContext
      login(user, token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
