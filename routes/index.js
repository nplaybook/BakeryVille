const router = require("express").Router();
const positions = require("./positions");

router.use("/position", positions)

module.exports = router