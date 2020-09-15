const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const userRouter = require("./routes/user");
const db = require("./models");

const app = express();

db.sequelize
  .sync()
  .then(() => console.log("연결이 성공적"))
  .catch(console.error("연결실패"));

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("asd");
});
app.use("/user", userRouter);

app.listen(3030, () => {
  console.log("3030포트에서 실행");
});
