var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const supersecret = process.env.SUPER_SECRET;

//This code now exist in new user 
// router.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const hash = await bcrypt.hash(password, saltRounds);

//     await db(
//       `INSERT INTO users (username, password) VALUES ("${username}", "${hash}")`
//     );

//     res.send({ message: "Register successful" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

router.post("/login", async (req, res) => {
const { username, password } = req.body;

try {
//check if user exists so we can compare the password
  const results = await db(
    `SELECT * FROM allusers WHERE username = "${username}"`); 
    // res.send(results);
  const user = results.data[0];
  console.log("THIS is my user",user);
  //if I can find the user, check if the password is correct
  if (user) {
    //store the user id in a variable
    const user_id = user.userid;
    
    const correctPassword = await bcrypt.compare(password, user.password);
    //if the password is not correct, throw an error
    console.log("THIS is my correctPassword",correctPassword, password, user.password);
    
    if (!correctPassword) {
      throw new Error("Incorrect password");
    } 
    //if the password is correct, create a token jwt.sign(user_id, supersecret)
    const token = jwt.sign({ user_id }, supersecret);
    //send the token back to the client 
    res.send({ message: "Login successful, here is your token", token, 
    user: {
      username: user.username,
      useravatar: user.avatarURL,
      usercurrentrank: user.currentRank,
    } });
    console.log("This is my Logged In USER INFO",res.send)
    //else - I don't have a user with that username
  } 

} catch (err) {
  res.status(400).send({ message: err.message });
}

});


router.get("/profile", userShouldBeLoggedIn, async (req, res) => {
  try {
const results = await db(`SELECT * FROM allusers WHERE userid = ${req.user_id}`);
res.send(results.data[0]);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }


});

module.exports = router;
