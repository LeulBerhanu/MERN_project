require("dotenv").config();
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT;

// middleware

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.use(express.json());
app.use(cors());

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to db & listening on port ${port} ...`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
