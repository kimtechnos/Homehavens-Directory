import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateUserInfo } from "../middleware/User.middleware.js";
const router = Router();

router.post("/register", validateUserInfo, createUser);

router.post("/login", loginUser);

export default router;
