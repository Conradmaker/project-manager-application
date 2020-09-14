const express = require("express");

const router = express.Router();
router.get("/signup", (req, res) => {
  res.send("회원가입");
});

module.exports = router;
