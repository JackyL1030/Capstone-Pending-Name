import SwapRequest from "../models/SwapRequest.js";

// create a swap request
export const createSwapRequest = async (req, res) => {
  try {
    const { shift, requestedWith } = req.body;

    const swapRequest = await SwapRequest.create({
      requester: req.user._id,
      shift,
      requestedWith,
    });
    res.status(201).json(swapRequest);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getSwapRequests = async (req, res) => {

};


export const updateSwapStatus = async (req, res) => {

};