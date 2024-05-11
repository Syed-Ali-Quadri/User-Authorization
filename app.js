const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.render("login");
});

app.listen(port, ()=>{
    console.log(`Listening 127.0.0.1:${port}`);
});