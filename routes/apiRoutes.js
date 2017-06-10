var express = require("express");

var articleController = require("../controllers/articlecontroller");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", articleController.index);
// Create a new quote using data passed in req.body
router.post("/quotes", articleController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/quotes/:id", articleController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", articleController.destroy);

module.exports = router;
