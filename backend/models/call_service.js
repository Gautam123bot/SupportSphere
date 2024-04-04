const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
    choose_service: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        default: null,
        required: true,
    },
    lastname: {
        type: String,
        default: null,
    },
    phone: {
        type: Number,
        required: true,
        default: null,
    },
    email: {
        type: String, 
        default: null,
        unique: true,
        lowercase: true,
        trim: true,
    },
})