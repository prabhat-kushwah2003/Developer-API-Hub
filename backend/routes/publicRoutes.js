import express from "express";
import { getCountry, getWeather } from "../controllers/publicController.js";

const router = express.Router();

router.get("/country/:name", getCountry);
router.get("/weather/:city", getWeather);

export default router;
