import express from "express"
import booked from "../controllers/bookingController.js"

const router = express.Router();
router.use(express.json());

router.post("/", booked);

export default router;