// Import
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const userModel = require("./model/usermodel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hash } = require("crypto");
const cookieParser = require("cookie-parser");

// Setting up ExpressJS
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Login Route & Post
app.get("/", (req, res) =>{
    res.render("login");
});

app.post("/login", (req, res) =>{ 
    let {email, password} = req.body;

    let findUser = userModel.findOne({email});

    if(!findUser) res.send("User not found")

    bcrypt.compare(password, findUser.password, (err, result) =>{
        if(result) {
            res.redirect('/profile');

            let token = jwt.sign({email}, "secret");
            res.cookie("token", token);

        }   else return res.redirect('/profile');
    })
});

// Register Route & Post
app.get("/register", (req, res) =>{
    res.render("register");
});

app.post("/create", (req, res) =>{
    let {email, password, name, username} = req.body;

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt , async (err, hash) =>{
            let createdUser = await userModel.create({
                name,
                username,
                email,
                password: hash
            });

            let token = jwt.sign({email}, "secret")
            res.cookie("token", token);
            res.redirect('/profile');
        })
    })
})

// Profile Route
app.get("/profile", (req, res) =>{
    res.render("profile");
});

// Running Port
app.listen(port, ()=>{
    console.log(`Listening 127.0.0.1:${port}`);
});