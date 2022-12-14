const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log("Application started and Listening on port 4000");
});

//app.get("/", (req, res) => {
    //res.send("Testing!");
//});

//app.get for method
//req means request method
//res means response method

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

//404 Page return to home page
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});