import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { validateUserInfo } from "../middleware/User.middleware.js";
const router = Router();

router.post("/register", validateUserInfo, createUser);
export default router;
