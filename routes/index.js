var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
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


// router.get("/allusers/:currentRank", async (req, res) => {
//   const {currentRank} = req.params;
//   // Send back list of allUsers with selected currentRank
//   console.log(`'reached the endpoint ${currentRank}'`)
//   try {
//      // Perform database query to fetch users  based on their current rank
//     const query =`SELECT * FROM allusers WHERE currentRank LIKE '%${currentRank}%' ORDER BY RAND();`;
//     const results = await db(query);
//     console.log(`The results are: ${results}`);
//     // Send JSON response with the fetched data
//     res.json(results);
    
//   } catch (err) {
//     console.error("Error occurred:", err);
//     res.status(500).send(err);
//   }
// });


module.exports = router;
