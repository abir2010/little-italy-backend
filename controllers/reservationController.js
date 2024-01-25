const Reservation = require("../models/reservationModel.js");
const mongoose = require("mongoose");

// add booking
const addReservation = async (req, res) => {
  try {
    const booking = await Reservation.create(req.body);

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all bookings
const getAllReservations = async (req, res) => {
  const bookings = await Reservation.find({});

  res.status(200).json(bookings);
};

// get todays reservation
const getTodaysReservations = async (req, res) => {
  const day = req.query.day;
  console.log(day);
  const query = { good: day };
  const result = await Reservation.find(query);
  console.log(result);

  res.status(200).json(result);
};

// get bookings by user email
const getUserReservations = async (req, res) => {
  const { email } = req.params;
  try {
    const userBookings = await Reservation.find({ email: email });

    res.status(200).json(userBookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete booking
const deleteReservation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such reservation" });
  }

  const reservation = await Reservation.findOneAndDelete({ _id: id });

  if (!reservation) {
    return res.status(400).json({ error: "No such reservation" });
  }

  res.status(200).json(reservation);
};

// update booking
const updateReservation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such reservation" });
  }

  const reservation = await Reservation.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!reservation) {
    return res.status(400).json({ error: "No such reservation" });
  }

  res.status(200).json(reservation);
};

module.exports = {
  addReservation,
  getAllReservations,
  getUserReservations,
  deleteReservation,
  updateReservation,
  getTodaysReservations,
};
