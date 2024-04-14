import ServiceMan from "../models/servicemen.js";
import express from "express"
// import { sendSMS } from "./sms.js";

const router = express.Router();
router.use(express.json());

router.post("/", async(req, res) => {
    try {
        if(!req.body.firstname || !req.body.lastname || !req.body.age || !req.body.previous_experience || !req.body.phone || !req.body.address){
            return res.status(400).send({
                message: "Send all required fields"
            });
        }

        const newServiceMan = new ServiceMan( {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            chooseExpertise: req.body.chooseExpertise,
            previous_experience: req.body.previous_experience,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
        });

        const savedServiceMan = await newServiceMan.save();
        return res.status(201).send(savedServiceMan);

        // const serviceMan = await ServiceMan.create(newServiceMan);

        // return res.status(201).send(serviceMan);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

// router.get("/api/sms", async (req, res) => {
//     try {
//         // Send SMS using Twilio API
//         const result = await sendSMS('+919711329779', 'Hello from Node');
//         res.status(200).json({ message: "SMS sent successfully", data: result });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to send SMS" });
//     }
// });

router.get("/", async(req, res)=>{
    try {
        const servicemans = await ServiceMan.find({});
        // return res.status(200).json(books);
        return res.status(200).json({
            count: servicemans.length,
            data: servicemans,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;