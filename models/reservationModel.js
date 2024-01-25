const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    orderdate: {
      type: String,
      required: true,
    },
    good: {
      type: String,
      required: true,
    },
    person: {
      type: Number,
      required: true,
    },
    slot: {
      type: String,
      required: true,
    },
    specialnotes: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    restaurantname: {
      type: String,
      required: true,
    },
    restaurantid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
