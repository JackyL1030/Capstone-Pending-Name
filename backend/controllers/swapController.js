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
  try {
    const requests = await SwapRequest.find()
      .populate("requester", "name email")
      .populate("requestedWith", "name email")
      .populate("shift");
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateSwapStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const swapRequest = await SwapRequest.findById(req.params.id);
    if (!swapRequest) {
      return res.status(404).json({
        message: "Swap request not found",
      });
    }
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }
    swapRequest.status = status;
    await swapRequest.save();

    res.status(200).json(swapRequest);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
