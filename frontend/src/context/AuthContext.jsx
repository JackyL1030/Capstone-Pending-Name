import { createContext, useState } from "react";

// creates a shared authentication context || allows components to access user and token data
const AuthContext = createContext();

// function stores authentication data and makes it available to child components
export function AuthProvider({ children }) {
  // checks if a saved user exists and restores it after refresh
  const savedUser = localStorage.getItem("user");

  const [user, setUser] = useState(
    savedUser && savedUser !== "undefined" ? JSON.parse(savedUser) : null,
  );
  // stores the JWT token for protected API requests
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // handles user login by updating authentication state and saving user data/token for future sessions
  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", tokenData);
  };
  // handles user logout by clearing authentication state and removing user data/token
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // provides authentication data to components wrapped inside AuthProvider
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
