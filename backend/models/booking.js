import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema({
  services: {
    type: String,
    required: true,
  },
  noofstaff: {
    type: Number,
    required: true,
    default: 1,
  },
  startdate: {
    type: Date,
    required: true,
  },
  starttime: {
    type: String,
    default: "10:00",
  },
  endtime: {
    type: String,
    default: "20:00",
  },
  notes: {
    type: String,
  },
  yname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
