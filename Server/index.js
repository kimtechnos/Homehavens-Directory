import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import cors from "cors";
import contactRouter from "./routes/contact.routes.js";
import homesRouter from "./routes/homes.routes.js"
import cookieParser from "cookie-parser";

config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);
app.use("/api/contact", contactRouter);
app.use("/api/homes", homesRouter);


app.listen(3000, () => {
  console.log("server running on port 3000...");
});
