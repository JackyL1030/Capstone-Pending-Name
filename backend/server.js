import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
