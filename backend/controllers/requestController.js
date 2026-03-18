import SavedRequest from "../models/SavedRequest.js";

export const createRequest = async (req, res) => {
  try {
    const { name, url, method, body } = req.body;

    const newRequest = new SavedRequest({
      userId: req.user.id,
      name,
      url,
      method,
      body,
    });

    await newRequest.save();

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getRequest = async (req, res) => {
  try {
    const requests = await SavedRequest.find({
      userId: req.user.id,
    });

    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateRequest = async (req, res) => {
  try {
    const request = await SavedRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(request);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteRequest = async (req, res) => {
  try {
    await SavedRequest.findByIdAndDelete(req.params.id);

    res.json({
      message: "Request deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
