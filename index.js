require('dotenv').config

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/login',(req,res) => {
  res.send("login page opened!")
});

app.get('/twitter',(req,res) => {
  res.send("twitter opened")
});

app.get('/youtube',(req,res) => {
  res.send("<h1>Hello youtube</h1>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
