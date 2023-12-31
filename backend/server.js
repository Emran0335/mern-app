const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// getting data
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));



app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
