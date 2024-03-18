var express = require('express');
var router = express.Router();

/* GET all users */
router.get('/', function(req, res, next) {
  db("SELECT * FROM user;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one user by ID
router.get("/:id", function(req, res, next) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM user WHERE id = ${id};`);
    if (results.data.length) {
      res.status(404).send({message: "User not found", error: true});
    } else {
      res.send(results.data[0]);
    }
    res.send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET user by region
router.get("/:serverRegion", function(req, res, next) {
  const { currentRank } = req.params;
  try {
    const results = await db(`SELECT * FROM user WHERE region = ${ serverRegion };`);
    if (results.data.length) {
      res.status(404).send({message: "User not found", error: true});
    } else {
      res.send(results.data);
    }
    res.send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;