const express = require("express");
const { current } = require("immer");
const { User, Project, PBoard, Todo, Schedule } = require("../../models");
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
    });
    res.status(201).json({ user: fullMember, projectId: me.ProjectId });
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

router.patch("/progress", isLoggedIn, async (req, res, next) => {
  try {
    const project = await Project.findOne({
      where: { id: req.body.projectId },
    });
    project.update({
      progress: req.body.progress,
    });
    res.status(200).json(req.body.progress);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/schedule", isLoggedIn, async (req, res, next) => {
  try {
    const project = await Project.findOne({
      where: { id: req.body.projectId },
    });
    if (!project) {
      return res.status(401).send("해당프로젝트가없어요");
    }
    const schedule = await Schedule.create({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      ProjectId: req.body.projectId,
    });
    res.status(200).json(schedule);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/grade", isLoggedIn, async (req, res, next) => {
  try {
    const me = await User.findOne({ where: req.user.id });
    if (me.gradedone) {
      return res.status(403).send("평가는 한번만 가능합니다.");
    }
    await me.update({ gradedone: true });
    const gradeArray = req.body;
    console.log(gradeArray);
    gradeArray.forEach(async (element) => {
      for (const key in element) {
        const elements = element[key];
        console.log(key, elements);
        const user = await User.findOne({ where: { id: key } });
        console.log(user.grade, elements);
        const resultGrade = (user.grade + parseInt(elements, 10)) / 2;
        console.log(resultGrade);
        await User.update(
          { grade: resultGrade.toFixed(1) },
          { where: { id: key } }
        );
      }
    });
    res.status(200).send("반영되었습니다.");
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
