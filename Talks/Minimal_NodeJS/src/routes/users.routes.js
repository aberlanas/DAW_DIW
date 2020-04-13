const express  = require("express")
const router   = express.Router()

router.post("/register", function (req, res) {
    res.send({ user: "Angel" });
  });

module.exports = router;