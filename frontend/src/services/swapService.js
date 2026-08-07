import axios from "axios";

const API_URL = "http://localhost:5000/api/swaps";

export const createSwapRequest = async (swapData, token) => {
  const response = await axios.post(API_URL, swapData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getSwapRequests = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateSwapStatus = async (id, status, token) => {
  const response = await axios.patch(
    `${API_URL}/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};
