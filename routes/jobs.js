const express = require("express");
const {
  getAlljobs,
  getUserJob,
  updateJob,
  deleteJob,
  addJob,
} = require("../controllers/jobsController");

// controller functions
const router = express.Router();

// all bookings route
router.get("/", getAlljobs);
// user bookings route
router.get("/:email", getUserJob);
// update booking route
router.put("/:id", updateJob);
// delete booking route
router.delete("/:id", deleteJob);
// add booking route
router.post("/", addJob);

module.exports = router;
