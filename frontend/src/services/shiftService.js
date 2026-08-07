import axios from "axios";

const API_URL = "http://localhost:5000/api/shifts";

// Get all shifts
export const getShifts = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Create a shift
export const createShift = async (shiftData, token) => {
  const response = await axios.post(API_URL, shiftData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
