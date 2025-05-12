import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./src/routes/productRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

app.use(cors());

app.use(express.json());
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
