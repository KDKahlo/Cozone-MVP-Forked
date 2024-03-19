var express = require('express');
var router = express.Router();

/* GET all users */
router.get('/user', function(req, res, next) {
  db("SELECT * FROM user;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one user by ID
router.get("/:id", async function(req, res, next) {
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
router.get("/:serverRegion", async function(req, res, next) {
  const { serverRegion } = req.params;
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

/* POST a new user */
router.post("/form", async function(req, res, next) {
  const { user } = req.body
  if (!user) {
    res.status(400).send({
      message: "Please complete the form",
  });
  return;
  }

  try {
    await db (
      `INSERT INTO students (username, birthdate, email, password, serverRegion, currentRank) 
      VALUES ('${username}', '${birthdate}', '${email}', '${password}', '${serverRegion}', '${currentRank});`
    );
    const results = await db("SELECT * FROM user;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = router;