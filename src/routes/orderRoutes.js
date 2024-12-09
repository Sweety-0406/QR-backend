import express from "express";
import { createOrder, getUserOrders, getAllOrders } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User creates an order
router.post("/", authenticate, createOrder);

// User fetches their orders
router.get("/", authenticate, getUserOrders);

// Admin fetches all orders
router.get("/all", authenticate, getAllOrders);

export default router;
