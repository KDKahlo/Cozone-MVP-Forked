var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// /* GET all users */
//localhost:4000/api/users/
router.get('/', async function(req, res, next) {

  try {
    const result = await db (`SELECT * FROM allUsers;`)
    const users = result.data;
    res.send(users);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

// GET one user by ID
router.get("/:userid", async function(req, res, next) {
  const { userid } = req.params;
  try {
    const result = await db(`SELECT * FROM allUsers WHERE userid = ${ userid };`);
    console.log(result);
    res.send(result);
    }
    // res.send(result); 
    catch (err) {
    res.status(500).send(err);
    }
});
//GET user by rank
//To test in Postman you need the following: localhost:4000/api/users/rank/diamond <---replace currentRank with any possible rank
router.get("/rank/:currentRank", async function(req, res, next) {
  const { currentRank } = req.params;
  console.log(`'the currentRank is:'${currentRank}`);
  try {
    const result = await db(`SELECT * FROM allUsers WHERE currentRank = '${ currentRank }';`);
    if (!currentRank) {
      res.status(404).send({message: `"User with ${currentRank} not found"`, error: true});
    } res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});
// GET user by region
//Postman should have: localhost:4000/api/users/region/Korea as example
router.get("/region/:serverRegion", async function(req, res, next) {
  const { serverRegion } = req.params;
  try {
    const result = await db(`SELECT * FROM allUsers WHERE serverRegion = '${ serverRegion }';`);
    if (!serverRegion) {
      res.status(404).send({message: "User not found", error: true});
    } res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* POST a new user */

router.post("/", async function(req, res, next) {
  const { username, birthdate, email, password, serverRegion, currentRank, avatarURL } = req.body
  console.log(`This is my req.body ${ username, birthdate, email, password, serverRegion, currentRank, avatarURL }`)
  if (!req.body) {
    res.status(400).send({
      message: "Please complete the form",
  });
  return;
  }

  try {
    await db (
      `INSERT INTO allusers (username, birthdate, email, password, serverRegion, currentRank, avatarURL) 
      VALUES ('${username}','${birthdate}','${email}','${password}','${serverRegion}','${currentRank}','${avatarURL}');`
     


      );
    const result = await db("SELECT * FROM allUsers;");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err)
  }
});
module.exports = router;