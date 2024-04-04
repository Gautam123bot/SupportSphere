const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
        required: true,
    },
    lastname: {
        type: String,
        default: null,
    },
    gender: {
        type: String,
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
    phone: {
        type: Number,
        default: null,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [128, 'Password must be less than 128 characters long'],
        validate: {
          validator: function(value) {
            // Require at least one uppercase letter, one lowercase letter, one special character and one number
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/;
            return regex.test(value);
          },
          message: 'Password must contain at least one uppercase letter, one lowercase letter, one special character and one number'
        }
      },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;