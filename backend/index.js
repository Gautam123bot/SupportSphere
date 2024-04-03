const express = require("express")
const User = require("./models/cus_uesrs")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1> Server is working </h1>");
})

app.post("/register", async (req, res) => {
    try {
        // get all data from body
        const {firstname, lastname, gender, email, phone, password} = req.body
        // all the data should exists
        if(!(firstname && gender && phone && password)){
            res.status(400).send("All fields are compulsory")
        }
        // check if user already exists
        const existingUser = await User.findOne({phone})
        if(existingUser){
            res.send(400).send("User already exists");
        }
        // encrypt the password
        const myEncPassword = await bcrypt.hash(password, 10)
        // save the user in DB
        const user = await User.create({
            firstname,
            lastname,
            gender,
            email,
            phone,
            password: myEncPassword
        })
        // generate a token for user and send it
        jwt.sign(
            {id: user._id}
        )
    } catch (error) {
        console.log(error);
    }
})

module.exports = app;