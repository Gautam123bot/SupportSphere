import mongoose from "mongoose";

const serviceManSchema  = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
        default: 18,
    },
    chooseExpertise: {
        type: String,
        default: null,
    },
    previous_experience: {
        type: Number,
        default: 0,
        required: true,
    },
    phone: {
        type: Number,
        default: null,
        unique: true,
        required: true,
    },
    email: {
        type: String, 
        default: null,
        unique: true,
        lowercase: true,
        trim: true,
    },
    address: {
        type: String,
        default: null,
        required: true,
    }, 
},{
    timestamps: true,
});

const ServiceMan  = mongoose.model('ServiceMan', serviceManSchema);

export default ServiceMan;
