import express from "express";
import cookieParser from "cookie-parser";

import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


// BACKEND TESTS & CONFIG
app.get("/test", (req, res) => {
  res.json("It works !")
})

app.listen(5000, () => {
  console.log("Connected to backend.");
});
