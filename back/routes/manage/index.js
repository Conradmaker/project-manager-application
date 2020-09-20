const express = require("express");
const { User, Project, PBoard } = require("../../models");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

router.post("/addmember/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const me = await User.findOne({ where: { id: req.user.id } });
    await User.update(
      { ProjectId: me.ProjectId },
      { where: { id: req.params.userId } }
    );
    const fullMember = await User.findOne({
      where: { id: req.params.userId },
      attributes: {
        exclude: ["password"],
      },
      include: [{ model: Project }],
    });
    res.status(201).json(fullMember);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/addboard", isLoggedIn, async (req, res, next) => {
  try {
    const exProject = await Project.findOne({
      where: { id: req.body.ProjectId },
    });
    if (!exProject) {
      return res.status(401).send("프로젝트를 찾을수가 없어요..");
    }
    const post = await PBoard.create({
      title: req.body.title,
      content: req.body.title,
      kind: parseInt(req.body.genre, 10),
      ProjectId: req.body.ProjectId,
      UserId: req.user.id,
    });
    const Fullpost = await PBoard.findOne({
      where: { id: post.id },
      include: [{ model: User, attributes: ["nickname"] }],
    });
    res.status(200).json(Fullpost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
