import express from "express";
import { addMenuItem, getMenuItems } from "../controllers/menuController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add-menu-item", authenticate, addMenuItem);
router.get("/", getMenuItems);

export default router;
