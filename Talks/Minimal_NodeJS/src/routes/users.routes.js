const express  = require("express")
const router   = express.Router()

router.post("/register", function (req, res) {
    console.log(req.body);
    res.send({ user: req.body.name });
  });

module.exports = router;