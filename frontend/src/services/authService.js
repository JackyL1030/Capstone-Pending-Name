import axios from "axios";

// base url for authentication api endpoints
const API_URL = "http://localhost:5000/api/auth";

const USER_API_URL = "http://localhost:5000/api/users";

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

/**
 * gets the currently authenticated user
 */
export const getMe = async (token) => {
  const response = await axios.get(`${USER_API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
