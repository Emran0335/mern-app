const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./backend/config/db");
const colors = require("colors");
const { errorHandler } = require("./backend/middleware/errorMiddleware");

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
app.use("/api/goals", require("./backend/routes/goalRoutes"));
app.use("/api/users", require("./backend/routes/userRoutes"));

// // Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "dist", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }
app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
