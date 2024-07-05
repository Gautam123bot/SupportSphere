import express from 'express';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import connectMongoDb from './connection.js';
import servicemenRouter from './routes/servicemen.js'; 
import bookingRouter from './routes/booking.js';
import emailRoute from './routes/emailRoute.js';
import userRoute from './routes/userRoute.js';
import complainRoute from './routes/complainRoute.js';
import ServiceMan from './models/servicemen.js';
import Booking from './models/booking.js';
import axios from 'axios';

const app = express();

// Middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "https://support-sphere.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware to handle preflight requests
app.options('*', cors(corsOptions));

// Ensure CORS headers are set for every response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://support-sphere.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.get('/', (req, res) => {
  return res.status(200).send('Welcome To MERN Stack Tutorial');
});

app.use('/service', servicemenRouter);
app.use("/api", userRoute);
app.use("/booked", bookingRouter);
app.use("/mailed", emailRoute);
app.use("/complain", complainRoute);

app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/get-addressofservicemen/:id', async (req, res) => {
  try {
    const doc = await ServiceMan.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const address_staff = doc.address;
    res.json({ address: address_staff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-addressofbooking/:id', async (req, res) => {
  try {
    const doc = await Booking.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const address_booking = doc.address;
    res.json({ address: address_booking });

    // Calculate distance
    const apiKey = process.env.GOOGLE_API_KEY;
    const deliveryAddress = address_booking;
    const vendorAddress = address_staff;
    const apiUrl = `https://maps.google.com/maps/api/distancematrix/json?units=imperial&origins=${vendorAddress}&destinations=${deliveryAddress}&key=${apiKey}`;
    const response = await axios.get(apiUrl);
    console.log(response.data);
    console.log(response.data.rows[0].elements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

connectMongoDb(mongoDBURL).then(() => {
  console.log("Mongodb connected!");
}).catch(err => {
  console.log("MongoDB connection error: ", err);
  process.exit(1);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
