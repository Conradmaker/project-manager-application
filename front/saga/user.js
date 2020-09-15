import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/user";

//회원가입
async function signUpAPI(data) {
  const response = await axios.post("/user/signup", data);
  return response.data;
}
function* signUp(action) {
  try {
    const data = yield call(signUpAPI, action.data);
    yield put({ type: SIGN_UP_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: SIGN_UP_ERROR, error: e.response.data });
  }
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

//로그인
async function logInAPI(data) {
  const response = await axios.post("/user/login", data);
  return response;
}
function* logIn(action) {
  try {
    const data = yield call(logInAPI, action.data);
    yield put({ type: LOG_IN_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: LOG_IN_ERROR, error: e.response.data });
  }
}
function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogin)]);
}
