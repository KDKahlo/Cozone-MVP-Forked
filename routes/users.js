var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET all users */
router.get('/', async function(req, res, next) {

  try {
    const result = await db (`SELECT * FROM allUsers;`)
    const users = result.data;
    res.send(users);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
//   db("SELECT * FROM profile;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
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

// GET user by region
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
// router.post("/form", async function(req, res, next) {
//   const { user } = req.body
//   if (!user) {
//     res.status(400).send({
//       message: "Please complete the form",
//   });
//   return;
//   }

//   try {
//     await db (
//       `INSERT INTO students (username, birthdate, email, password, serverRegion, currentRank) 
//       VALUES ('${username}', '${birthdate}', '${email}', '${password}', '${serverRegion}', '${currentRank});`
//     );
//     const result = await db("SELECT * FROM profile;");
//     res.send(result.data);
//   } catch (err) {
//     res.status(500).send(err)
//   }
// });

module.exports = router;