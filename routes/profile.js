var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET user by region
router.get("/region/:serverRegion", async function(req, res, next) {
    const { serverRegion } = req.params;
    try {
      const result = await db(`SELECT * FROM profile WHERE serverRegion = '${ serverRegion }';`);
      if (!serverRegion) {
        res.status(404).send({message: "User not found", error: true});
      } res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  module.exports = router;