const express  = require("express");
const router   = express.Router();
const moment   = require("moment");

router.post("/register", function (req, res) {
    console.log(req.body);
    res.send(
      { user: req.body.name ,
        createdAt: moment().format()
      });
  });

module.exports = router;