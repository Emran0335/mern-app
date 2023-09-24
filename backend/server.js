const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// getting data
app.use("/api/goals", require("./routes/goalRoutes"));

// Serve frontend

app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
