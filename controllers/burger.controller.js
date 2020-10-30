const express = require("express");
const router = express.Router();


const db = require("../models");


//Create a Burger

router.post("/", function(req, res) {
  db.Burger.create({
    name: req.body.name,
    devoured: req.body.devoured == 'true' || req.body.devoured === true 
  }).then(function(result) {
    res.json({ id: result.insertId });
  });
});


//Update Burger
router.patch("/:id", function(req, res) {
  db.Burger.update({
    devoured: req.body.devoured == 'true' || req.body.devoured === true 
  }, {
    id: req.params.id
  }).then(function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});




module.exports = router;
