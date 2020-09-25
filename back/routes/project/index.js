const express = require("express");
const loadRouter = require("./load");
const { Project, EBoard, User, EComment, Image } = require("../../models");
const { isLoggedIn } = require("../middlewares");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

try {
  fs.accessSync("uploads");
} catch (e) {
  console.log("폴더 생성");
  fs.mkdirSync("uploads");
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, res, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

const router = express.Router();

router.post(
  "/image",
  isLoggedIn,
  upload.array("image"),
  async (req, res, next) => {
    res.json(req.files.map((v) => v.filename));
  }
);

router.post("/create", isLoggedIn, upload.none(), async (req, res, next) => {
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
    //이미지추가
    if (req.body.image) {
      await Image.create({ ProjectId: project.id, src: req.body.image });
    }
    await EBoard.create({
      content: req.body.content,
      ProjectId: project.id,
      UserId: req.user.id,
      kind: req.body.kind,
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
          include: { model: Image, attributes: ["src"] },
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

//검색
router.get("/search/:keyword", async (req, res, next) => {
  try {
    const project = await Project.findAll({
      where: {
        name: { [Op.like]: "%" + decodeURIComponent(req.params.keyword) + "%" },
      },
    });
    const array = [];
    for (let i = 0; i < project.length; i++) {
      array[i] = project[i].id;
    }
    const user = await User.findAll({ where: { ProjectId: array } });
    const result = await EBoard.findAll({
      where: { ProjectId: array },
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
          include: { model: Image, attributes: ["src"] },
        },
        { model: User, attributes: ["id", "nickname", "ProjectId"] },
      ],
    });
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

//댓글달기
router.post("/comment/:postId", isLoggedIn, async (req, res, next) => {
  try {
    const post = await EBoard.findOne({
      where: { ProjectId: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await EComment.create({
      content: req.body.content,
      UserId: req.user.id,
      EBoardId: post.id,
    });
    const fullComment = await EComment.findOne({
      where: { id: comment.id },
      include: [{ model: User, attributes: ["id", "nickname", "ProjectId"] }],
    });
    res.status(201).json(fullComment);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

//댓글삭제
router.delete("/delete/:commentId", isLoggedIn, async (req, res, next) => {
  try {
    const { EBoardId } = await EComment.findOne({
      where: { id: parseInt(req.params.commentId, 10) },
    });
    await EComment.destroy({
      where: { id: req.params.commentId, UserId: req.user.id },
    });
    res
      .status(200)
      .json({ CommentId: parseInt(req.params.commentId, 10), EBoardId });
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.use("/load", loadRouter);

module.exports = router;
