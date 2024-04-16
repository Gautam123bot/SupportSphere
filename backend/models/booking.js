import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema({
  // username: String,
  services: {
    type: String,
    required: true,
  },
  noofstaff: {
    type: Number,
    required: true,
    default: 1,
  },
  starttime: {
    type: String,
    default: 10,
  },
  endtime: {
    type: String,
    default: 8,
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
    requried: true,
  },
  address: {
    type: String,
    required: true,
  }

  // email: String,
  // password: String,
  // firstName: String,
  // lastName: String,
  // country: String, 
  // state: String, 
  // city: String,
  // address: String,
  // phone: String,
  // food: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
