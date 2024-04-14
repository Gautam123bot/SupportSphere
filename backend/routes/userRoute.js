import express from "express"
import {sendOtp, verifyOtp} from "../controllers/userController.js"

const router = express.Router();

router.use(express.json());



router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

export default router;