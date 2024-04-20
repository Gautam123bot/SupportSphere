import mongoose from "mongoose";

const complainSchema = new mongoose.Schema({
    yname: {
        type: String,
        default: null,
        required: true,
    },
    phone: {
        type: String,
        default: null,
        required: true,
    },
    staffId: {
        type: String, 
        default: null,
        required: true,
    },
    staffName: {
        type: String,
        default: null,
        required: true,
    },
    reason: {
        type: String, 
        required: true,
    }
})

const Complain = mongoose.model("Complain", complainSchema)

export default Complain;