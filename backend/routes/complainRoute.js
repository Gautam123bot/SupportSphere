import Complain from "../models/complainofstaff.js";
import express from "express"

const router = express.Router();
router.use(express.json());

router.post("/", async(req, res) => {
    try{
        if(!req.body.yname || !req.body.phone || !req.body.staffId || !req.body.staffName || !req.body.reason){
            return res.status(400).send({
                message: "Send all required fields"
            })
        }

        const newComplain = new Complain({
            yname: req.body.yname,
            phone: req.body.phone,
            staffId: req.body.staffId,
            staffName: req.body.staffName,
            reason: req.body.reason
        });

        const savedComplain = await newComplain.save();
        return res.status(201).send(savedComplain);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

export default router;