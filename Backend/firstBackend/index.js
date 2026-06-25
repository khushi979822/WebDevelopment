import dotenv from "dotenv";
dotenv.config();

import express from "express";

import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });
});

// app.post("/login", (req, res) => {
//   res.json({ message: "Login Successfull" });
// });

// app.get("/logout", (req, res) => {
//   res.json({ message: "Logged out successfully" });
// });

// app.post("/register", (req, res) => {
//   res.json({ message: "register Successfull" });
// });

// app.put("/update", (req, res) => {
//   res.json({ message: "update Successfull" });
// });

// app.delete("/delete", (req, res) => {
//   res.json({ message: "delete Successfull" });
// });

// Default Error Handler
app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({ message: ErrMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on Port:", port);
  connectDB();
});
