var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
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


//GET allusers
router.get("/allusers", async (req, res) => {
  // Send back allusers
  console.log('reached the endpoint')
  try {
    const allusersquery = "SELECT * FROM allusers;";
    const allusersResults = await db(allusersquery);
    console.log(`The results are: ${allusersResults.data}`);
  

    res.send(allusersResults);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});

//route for users by rank
router.get("/rank/:currentRank", async (req, res) => {
  const {currentRank} = req.params;
  // Send back list of allUsers with selected currentRank
  console.log(`'reached the endpoint ${currentRank}'`)
  try {
     // Perform database query to fetch users  based on their current rank
    const query =`SELECT * FROM allusers WHERE currentRank LIKE '%${currentRank}%' ORDER BY RAND();`;
    const results = await db(query);
    console.log(`The results are: ${results}`);
    // Send JSON response with the fetched data
    res.json(results);
    
  } catch (err) {
    console.error("Error occurred:", err);
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
      // INSERT INTO allUsers (username, birthdate, email, password, serverRegion, currentRank, avatarURL) 
      // VALUES ('SadPanda', '1995-03-28', 'example@example.com', 'SpaceR00123', 'NA', 'Immortal', 'https://64.media.tumblr.com/a302a53ca34734535f083dcfa42ef0a4/68806959c7b602c8-9d/s2048x3072/5f9a72bc66deb244105b6db1ec36d968b19a89fa.jpg');
      
   
      );
    const result = await db("SELECT * FROM allUsers;");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err)
  }
});



module.exports = router;
