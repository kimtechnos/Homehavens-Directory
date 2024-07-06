import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import cors from "cors";
import contactRouter from "./routes/contact.routes.js";

config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/contact", contactRouter);

app.listen(3000, () => {
  console.log("server running on port 3000...");
});
