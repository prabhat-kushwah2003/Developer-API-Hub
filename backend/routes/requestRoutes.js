import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createRequest,
  deleteRequest,
  getRequest,
  updateRequest,
} from "../controllers/requestController.js";

const router = express.Router();

router.post("/", authMiddleware, createRequest);
router.get("/", authMiddleware, getRequest);
router.put("/:id", authMiddleware, updateRequest);
router.delete("/:id", authMiddleware, deleteRequest);

export default router;