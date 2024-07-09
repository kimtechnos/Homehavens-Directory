import { Router } from "express";
import { createContact } from "../controllers/contact.controllers.js";
import verifyToken from "../middleware/verifyToken.middleware.js";

const router = Router();
router.post("/", createContact);
export default router;
