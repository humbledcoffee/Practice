var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/list", (req, res) => {
  res.send(["111", "222", "333"]);
});

module.exports = router;
