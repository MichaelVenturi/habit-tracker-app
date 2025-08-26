import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js";

import habitRoutes from "./routes/habitRoutes.js";

config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/habits", habitRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
