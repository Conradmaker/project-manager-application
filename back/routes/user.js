const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const router = express.Router();
//회원가입
router.post("/signup", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (exUser) {
      res.status(403).send("이미 있는 이메일입니다.");
    }
    const hashedPwd = await bcrypt.hash(req.body.password, 11);
    const fullUser = await User.create({
      email: req.body.email,
      password: hashedPwd,
      nickname: req.body.nickname,
      position: req.body.position,
      grade: 0,
    });
    res.status(201).json(fullUser.email);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

//로그인
router.post("/login", (req, res, next) => {
  res.send("asd");
});

module.exports = router;
