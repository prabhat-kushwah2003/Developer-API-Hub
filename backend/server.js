import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import requestRoutes from "./routes/requestRoutes.js"
import publicRoutes from "./routes/publicRoutes.js"


dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// mongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// test route
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/requests", requestRoutes)

app.use("/api/public", publicRoutes)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
