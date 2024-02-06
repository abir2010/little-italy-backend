const express = require("express");
const {
  addReservation,
  getAllReservations,
  getUserReservations,
  deleteReservation,
  updateReservation,
  getTodaysReservations,
  getAnydaysReservations,
} = require("../controllers/reservationController");

// controller functions

const router = express.Router();

// all bookings route
router.get("/", getAllReservations);
// get todays reservation
router.get("/todays", getTodaysReservations);
// get any dates reservation
router.get("/anydays", getAnydaysReservations);
// user bookings route
router.get("/:email", getUserReservations);
// update booking route
router.put("/:id", updateReservation);
// delete booking route
router.delete("/:id", deleteReservation);
// add booking route
router.post("/", addReservation);

module.exports = router;
