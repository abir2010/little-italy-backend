require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const reservationsRoutes = require("./routes/reservations");
const jobsRoutes = require("./routes/jobs");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", usersRoutes);
app.use("/api/reservations", reservationsRoutes);
app.use("/api/jobs", jobsRoutes);

app.get("/", (req, res) => {
  res.send("Little Italy is Running Successfully");
});
app.get("/api", (req, res) => {
  res.send("Little Italy is Running Successfully");
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "little-italy",
  })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        "connected to db & listening on port",
        process.env.PORT || 3000
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
