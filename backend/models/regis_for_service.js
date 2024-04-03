import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
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
        required: true,
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
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    address: {
        type: String,
        default: null,
        required: true,
    },
})

const User = mongoose.model('User', userSchema);
 
module.exports = User;