// Import
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const userModel = require("./model/usermodel");

// Setting up ExpressJS
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Login Route & Post
app.get("/", (req, res) =>{
    res.render("login");
});

// Register Route & Post
app.get("/register", (req, res) =>{
    res.render("register");
});

// Profile Route
app.get("/profile", (req, res) =>{
    res.render("profile");
});

// Running Port
app.listen(port, ()=>{
    console.log(`Listening 127.0.0.1:${port}`);
}); 