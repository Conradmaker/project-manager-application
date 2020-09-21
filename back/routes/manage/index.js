const express = require("express");
const { current } = require("immer");
const { User, Project, PBoard, Todo } = require("../../models");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

router.post("/member/:userId", isLoggedIn, async (req, res, next) => {
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

router.delete("/member/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({ where: { id: req.params.userId } });
    if (!exUser) {
      return res.status(401).send("없는 유저입니다.");
    }
    await exUser.update({ ProjectId: null });
    res.status(200).json(parseInt(req.params.userId, 10));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/board", isLoggedIn, async (req, res, next) => {
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
      include: [{ model: User, attributes: ["id", "nickname"] }],
    });
    res.status(200).json(Fullpost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/board/:userId/:postId", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user.id !== parseInt(req.params.userId, 10)) {
      return res.status(401).send("본인 게시글만 삭제할 수 있습니다.");
    }
    await PBoard.destroy({
      where: { id: parseInt(req.params.postId, 10) },
    });
    res.status(200).json(parseInt(req.params.postId, 10));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/todo", isLoggedIn, async (req, res, next) => {
  try {
    const todo = await Todo.create({
      content: req.body.title,
      ProjectId: req.body.projectId,
      UserId: req.user.id,
    });
    res.status(200).json(todo);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/todo/:todoId", isLoggedIn, async (req, res, next) => {
  try {
    await Todo.destroy({
      where: { id: parseInt(req.params.todoId, 10) },
    });
    res.status(200).json(parseInt(req.params.todoId, 10));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.patch("/todo/:todoId", isLoggedIn, async (req, res, next) => {
  try {
    console.log(parseInt(req.params.todoId, 10));
    const todo = await Todo.findOne({
      where: { id: parseInt(req.params.todoId, 10) },
    });
    console.log(todo, todo.done);
    await Todo.update(todo.done ? { done: 0 } : { done: 1 }, {
      where: { id: parseInt(req.params.todoId, 10) },
    });
    res.status(200).json(parseInt(req.params.todoId, 10));
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
