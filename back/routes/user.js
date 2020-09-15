const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();
//로그인;
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const FullUser = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(FullUser);
    });
  })(req, res, next);
});

//회원가입
router.post("/signup", isNotLoggedIn, async (req, res, next) => {
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

//로그아웃
router.post("/logout", isLoggedIn, (req, res) => {
  console.log(1);
  req.logout();
  console.log(2);
  req.session.destroy();
  console.log(3);
  res.send("ok");
});

module.exports = router;
