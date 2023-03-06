const express = require("express");
const app = express();

// const searchRoutes = require("./items/items.routes.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use("/api", searchRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

module.exports = app;
