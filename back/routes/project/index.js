const express = require("express");
const loadRouter = require("./load");
const { Project, EBoard, User, EComment } = require("../../models");
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

    await EBoard.create({
      content: req.body.content,
      ProjectId: project.id,
      UserId: req.user.id,
    });

    const projectList = await EBoard.findOne({
      where: { id: project.id },
      include: [
        {
          model: EComment,
          include: [{ model: User, attributes: ["id", "nickname"] }],
        },
        {
          model: Project,
        },
        { model: User, attributes: ["id", "nickname"] },
      ],
    });
    res.status(201).json(projectList);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.use("/load", loadRouter);

module.exports = router;
