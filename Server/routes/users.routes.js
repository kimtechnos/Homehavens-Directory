import { Router } from "express";
import { createUser, loginUser,getAllusers,deleteUser } from "../controllers/users.controllers.js";
import { validateUserInfo } from "../middleware/User.middleware.js";
import verifyToken from "../middleware/verifyToken.middleware.js";
const router = Router();

router.post("/register", validateUserInfo, createUser);

router.post("/login",loginUser);
 router.get("/", getAllusers)
  router.delete("/:id", deleteUser);


export default router;
