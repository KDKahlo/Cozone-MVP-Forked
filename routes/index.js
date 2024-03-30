var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// router.get('/allUsers', async function(req, res, next) {

//   try {
//     const result = await db (`SELECT * FROM allUsers;`)
//     const users = result.data;
//     res.send(users);
//   } catch (err) {
//     res.status(500).send({error: err.message});
//   }
// });

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
  // Send back the full list of breweries
  console.log('reached the endpoint')
  try {
    const allusersquery = "SELECT * FROM allusers;";
    const allusersResults = await db(allusersquery);
    console.log(`The results are: ${allusersResults}`);
  

    res.send(allusersResults.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});


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


module.exports = router;
