import express from "express";
import { register, login, logout, getUser } from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/get-user",authenticate, getUser);

export default router;
