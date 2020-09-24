const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConfig = require("./passport");
const path = require("path");
const userRouter = require("./routes/user");
const projectRouter = require("./routes/project");
const manageRouter = require("./routes/manage");
const db = require("./models");
dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

console.log("미들웨어 통과");
app.get("/", (req, res) => {
  res.send("asd");
});
app.use("/user", userRouter);
app.use("/project", projectRouter);
app.use("/manage", manageRouter);

app.listen(3030, () => {
  console.log("3030포트에서 실행");
});
