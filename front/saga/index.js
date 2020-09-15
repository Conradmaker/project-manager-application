import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import axios from "axios";
import projectSaga from "./project";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(projectSaga)]);
}
