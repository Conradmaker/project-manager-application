import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOAD_MY_INFO_ERROR,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_ERROR,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
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
  return response.data;
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

//로그아웃
function logOutAPI() {
  return axios.post("/user/logout");
}
function* logout() {
  try {
    yield call(logOutAPI);
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (e) {
    console.error(e);
    yield put({ type: LOG_OUT_ERROR, error: e.response.data });
  }
}
function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

//로그인 유지
async function loadMyInfoAPI() {
  const response = await axios.get("/user/");
  return response.data;
}
function* loadMyInfo() {
  try {
    const data = yield call(loadMyInfoAPI);
    yield put({ type: LOAD_MY_INFO_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: LOAD_MY_INFO_ERROR, error: e.response.data });
  }
}
function* watchLoadMyInfo() {
  yield takeEvery(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadMyInfo),
  ]);
}
