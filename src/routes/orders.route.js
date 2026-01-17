import express from "express";
import { order, getOrder, statusOrder, getOrderById, deleteOrder } from "../controllers/order.controllers.js";

const router = express.Router();

//UNTUK CUSTOMER
router.post("/orders", order);

// UNTUK ADMIN
router.get("/getorder", getOrder);
router.get("/getorder/:id", getOrderById);
router.post("/statusorder/:id", statusOrder);
router.delete("/deleteorder/:id", deleteOrder);

export default router;
