require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port} ...`);
});
