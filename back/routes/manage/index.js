const express = require("express");
const { User, Project } = require("../../models");
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

module.exports = router;
