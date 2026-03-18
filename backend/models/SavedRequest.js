import mongoose from "mongoose";

const savedRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    method: {
      type: String,
      required: true,
    },

    body: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

const SavedRequest = mongoose.model("SavedRequest", savedRequestSchema);
export default SavedRequest;
