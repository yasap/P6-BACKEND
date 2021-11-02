
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));


// const User = require("./models/user.js");
// const bcrypt = require("bcrypt");
mongoose.connect("mongodb+srv://Piriya:Testuno@cluster0.v0k8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log('successfully connected to Mongodb Atlas')
  })
  
  .catch((error) => {
    console.log('Error on connecting to Mongodb Atlas');
    console.error(error);
  })
    app.use(function (req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Method", "PUT, GET, DELETE, POST")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, authorization, Content, X-Requested-With")
  next()
})

app.use(express.json());

// app.post("/api/auth/signup", function (req, res) {
//   // let email = req.body.email;
//   console.log("test", req.body);

//   let password = res.body.password;
//   bcrypt.hash(password, 10).then(function (hashpassword) {
//   const signin = new User(
//     {email:req.body.email, password:hashpassword}
//   )
//   signin.save().then(function () {
//     res.status(200).json({ message: "thank you for sign up, the messege been sent to this e-mail:" });
//   }).catch(function (error) {
//     console.error(error);
//     res.status(500).json({ message: "something went wrong" });
//   })

  
//   }).catch(function(error) {
//     console.error(error);
//     res.status(500).json({ message: "something went wrong" });
//   })
  
// })
// app.post("/api/auth/login ", function (req, res) {
//   res.status(200).json({message: "Welcome Back"});
// })
// app.get("/api/sauces", function (req, res) {
//   res.status(200).json({message:"my message here"})
// })
// app.post("/api/sauces", function (req, res) {
//   res.status(200).json({ message: "sauces" })
// })
// app.put("/api/sauces/:id", function (req, res){
//   res.status(200).json({ message: "sauces type" })
// })
// app.delete("/api/sauces/:id", function (req, res) {
//   res.status(200).json({ message: "delet" })
// })
// app.post("/api/sauces/:id/like", function (req, res) {
//   res.status(200).json({ message: "" })
// })
app.use('/api/auth', userRoutes);
module.exports = app;

//  login , findone , sauses , mongose 