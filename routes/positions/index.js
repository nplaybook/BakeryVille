const router = require("express").Router();
const getPositions = require("./get_positions");
const createPosition = require("./create_position");
  
router.get("/get_positions", getPositions);
router.post("/create_position", createPosition);

module.exports = router;