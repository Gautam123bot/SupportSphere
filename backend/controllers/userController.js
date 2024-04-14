import otpGenerator from "otp-generator"
import twilio from "twilio"
import serviceMan from "../models/servicemen.js"
import otpVerification from "../helpers/otpValidate.js"
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUND_SID
const authToken = process.env.TWILIO_AUTH_TOEKN

const twiioClient = new twilio(accountSid, authToken)

export const sendOtp = async(req, res) => {
    try {
        const {phone} = req.body;

        const otp = otpGenerator.generate(6, {upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false});
        const cDate = new Date()
        const otpExpiration = new Date(Date.now() + 2 * 60 * 1000);
        // await serviceMan.findOneAndUpdate(
        //     {phone},
        //     {otp, otpExpiration: new Date(cDate.getTime()  + 2 * 60 * 1000)},
        //     {upsert: true, new: true, setDefaultOnInsert: true}
        // )

        // const filter = { phone }; // Filter for the document
        // const update = {
        //     $set: { otp, otpExpiration: new Date(cDate.getTime() + 2 * 60 * 1000) }
        // }; // Update operation
        // const options = {
        //     upsert: true, // If document does not exist, insert it
        //     new: true, // Return the modified document rather than the original
        //     setDefaultsOnInsert: true // Set default values if the document is inserted
        // };

        // const updatedDocument = await serviceMan.findOneAndUpdate(filter, update, options);

        const updatedDocument = await serviceMan.findOneAndUpdate(
            { phone },
            { otp, otpExpiration },
            { upsert: true, new: true, setDefaultsOnInsert: true }
          );


        await twiioClient.messages.create({
            body: `Your OTP is: ${otp}`,
            to: phone,
            from: process.env.TWILIO_PHONE_NUMBER
        })

        return res.status(200).json({
            success: true,
            msg: "OTP Sent Successfully! "+otp
        })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
}

export const verifyOtp = async (req, res) => {
    try {
        const {phone, otp} = req.body

        const otpData = await serviceMan.findOne({
            phone,
            otp
        })
        if(!otpData){
            return res.status(400).json({
                success: false,
                msg: "Invalid OTP!"
            })
        }

        const isOtpExpired = await otpVerification(otpData.otpExpiration);
        if(isOtpExpired){
            return res.status(400).json({
                success: false,
                msg: "Your OTP has been expired!"
            })
        }

        return res.status(200).json({
            success: true,
            msg: "OTP Verified Successfully"
        })

    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({
          success: false,
          msg: "An error occurred while verifying OTP. Please try again later.",
        });
    }
}

// export default {sendOtp, verifyOtp};
