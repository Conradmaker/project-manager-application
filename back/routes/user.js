const express = require("express");
const { User, Project } = require("../models");
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
        include: [{ model: Project, attributes: ["name"] }],
      });
      return res.status(200).json(FullUser);
    });
  })(req, res, next);
});

//로그인 유지
router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const fullUser = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [{ model: Project, attributes: ["name"] }],
      });
      return res.status(200).json(fullUser);
    } else {
      return res.status(200).json(null);
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
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
