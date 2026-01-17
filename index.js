import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";
import productRoutes from "./src/routes/product.route.js";
import orderRoutes from "./src/routes/orders.route.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());
const PORT = process.env.PORT;

app.use("/p", productRoutes);
app.use("/o", orderRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
