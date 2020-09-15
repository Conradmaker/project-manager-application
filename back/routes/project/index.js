const express = require("express");
const { Project, EBoard, User } = require("../../models");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

router.post("/create", isLoggedIn, async (req, res, next) => {
  try {
    //유저가 진행중인 프로젝트가 있는지 검사
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user.ProjectId) {
      res.status(403).send("이미 진행중인 프로젝트가 있습니다.");
    }
    const project = await Project.create({
      name: req.body.name,
      kind: req.body.kind,
      leader: req.user.id,
      number: req.body.number,
      progress: 0,
    });

    await user.update({ ProjectId: project.id });

    const eboard = await EBoard.create({
      content: req.body.content,
      ProjectId: project.id,
    });

    res.status(201).json({ project, eboard });
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
