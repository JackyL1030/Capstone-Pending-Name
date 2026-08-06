import axios from "axios"

// base url for authentication api endpoints
const API_URL = "http://localhost:5000/api/auth";

/**
 * sends login credentials to the backend and returns
 * the JWT token and user information after successful login
 */
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};
