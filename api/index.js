import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// POSTS
app.use("/api/posts", postRoutes)

// USERS
app.use("/api/users", userRoutes)

// AUTH
app.use("/api/auth", authRoutes)


// BACKEND TESTS & CONFIG
app.get("/test", (req, res) => {
  res.json("It works !")
})

app.listen(5000, () => {
  console.log("Connected to backend.");
});
