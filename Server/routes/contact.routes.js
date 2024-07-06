import { Router } from "express";
import { createContact } from "../controllers/contact.controllers.js";
const router = Router();
router.post("/", createContact);
export default router;
