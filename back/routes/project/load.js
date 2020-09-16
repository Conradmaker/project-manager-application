const express = require("express");
const { EBoard, EComment, User, Project } = require("../../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projectList = await EBoard.findAll({
      limit: 12,
      order: [["createdAt", "DESC"]],
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
    res.status(200).json(projectList);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
