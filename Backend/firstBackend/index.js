import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });
});

app.post("/login", (req, res) => {
  res.json({ message: "Login Successfull" });
});

app.get("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

app.post("/register", (req, res) => {
  res.json({ message: "register Successfull" });
});

app.put("/update", (req, res) => {
  res.json({ message: "update Successfull" });
});

app.delete("/delete", (req, res) => {
  res.json({ message: "delete Successfull" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on Port:", port);
});
