import express from "express"
import {sendEmail, getSentEmails} from "../controllers/emailController.js"

const router = express.Router();
router.use(express.json());

router.post("/", sendEmail);

router.get("/", getSentEmails);



export default router;