import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import servicemenRouter from "./routes/servicemen.js"; 
import subscribeRouter from "./routes/subscribeRouter.js"
import cors from 'cors';
import connectMongoDb from './connection.js';
// import twilioRouter from "./routes/servicemen.js"

const app = express();

// Middleware
app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome To MERN Stack Tutorial');
});

app.use('/service', servicemenRouter);
app.use("/subscribe", subscribeRouter)
// app.use("/sms", twilioRouter)

// MongoDB Connection
// mongoose.connect(mongoDBURL).then(() => {
//   console.log("MongoDB connected!");
// }).catch(err => {
//   console.error("MongoDB connection error:", err);
//   process.exit(1); // Exit the process if MongoDB connection fails
// });

connectMongoDb("mongodb://127.0.0.1:27017/serviceuser").then(()=>{
  console.log("Mongodb connected!")
}).catch(err=>{
  console.log("MongoDB connection error: ", err);
  process.exit(1);
})

// Error Handling Middleware
app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
