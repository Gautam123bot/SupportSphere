import Complain from "../models/complainofstaff.js";
import express from "express";

const router = express.Router();
router.use(express.json());

router.post("/", async(req, res) => {
    try {
        const { yname, phone, staffId, staffName, reason } = req.body;
        if (!yname || !phone || !staffId || !staffName || !reason) {
            return res.status(400).send({
                message: "Send all required fields"
            });
        }

        const newComplain = new Complain({
            yname,
            phone,
            staffId,
            staffName,
            reason
        });

        const savedComplain = await newComplain.save();
        return res.status(201).send(savedComplain);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

export default router;
