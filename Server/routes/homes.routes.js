import { Router } from "express";
import {
  getAllHomes,
  getSingleHome,
  createHome,
  updateHome,
  deleteHome,
} from "../controllers/homes.controllers.js";

const router = Router();

router
  .get("/", getAllHomes)
  .get("/:id", getSingleHome)
  .post("/", createHome)
  .patch("/:id", updateHome)
  .delete("/:id", deleteHome);

export default router;
