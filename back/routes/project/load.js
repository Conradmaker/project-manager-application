const express = require("express");
const {
  EBoard,
  EComment,
  User,
  Project,
  Schedule,
  PBoard,
  Todo,
} = require("../../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projectList = await EBoard.findAll({
      limit: 12,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: EComment,
          include: [
            { model: User, attributes: ["id", "nickname", "ProjectId"] },
          ],
        },
        {
          model: Project,
        },
        { model: User, attributes: ["id", "nickname", "ProjectId"] },
      ],
    });
    res.status(200).json(projectList);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findOne({
      where: { id: req.params.projectId },
      include: [
        { model: User, attributes: ["id", "nickname", "position"] },
        {
          model: PBoard,
          include: { model: User, attributes: ["nickname", "id"] },
        },
        { model: Schedule },
        { model: Todo },
      ],
    });
    if (!project) {
      return res.status(401).send("프로젝트가 없습니다.");
    }
    console.log(project);
    res.status(200).json(project);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
