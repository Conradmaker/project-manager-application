const axios = require("axios");
const { all, fork, takeEvery, call, put } = require("redux-saga/effects");
const {
  ADD_MEMBER_ERROR,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_PBOARD_SUCCESS,
  ADD_PBOARD_ERROR,
  ADD_PBOARD_REQUEST,
  REMOVE_PBOARD_SUCCESS,
  REMOVE_PBOARD_ERROR,
  REMOVE_PBOARD_REQUEST,
  REMOVE_MEMBER_SUCCESS,
  REMOVE_MEMBER_ERROR,
  REMOVE_MEMBER_REQUEST,
} = require("../reducers/manage");
//멤버추가
async function addMemberAPI(data) {
  const response = await axios.post(`/manage/member/${data}`);
  return response.data;
}
function* addMember(action) {
  try {
    const data = yield call(addMemberAPI, action.data);
    yield put({ type: ADD_MEMBER_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: ADD_MEMBER_ERROR, error: e.response.data });
  }
}
function* watchAddMember() {
  yield takeEvery(ADD_MEMBER_REQUEST, addMember);
}

//멤버강톼
async function removeMemberAPI(data) {
  const response = await axios.delete(`/manage/member/${data}`);
  return response.data;
}
function* removeMember(action) {
  try {
    console.log(data);
    const data = yield call(removeMemberAPI, action.data);
    yield put({ type: REMOVE_MEMBER_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: REMOVE_MEMBER_ERROR, error: e.response.data });
  }
}
function* watchRemoveMember() {
  yield takeEvery(REMOVE_MEMBER_REQUEST, removeMember);
}

//게시판글추가
async function addPBoardAPI(data) {
  const response = await axios.post(`/manage/addboard/`, data);
  return response.data;
}
function* addPBoard(action) {
  try {
    const data = yield call(addPBoardAPI, action.data);
    yield put({ type: ADD_PBOARD_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: ADD_PBOARD_ERROR, error: e.response.data });
  }
}
function* watchAddPBoard() {
  yield takeEvery(ADD_PBOARD_REQUEST, addPBoard);
}

//게시판글삭제
async function removePBoardAPI(data) {
  const response = await axios.delete(
    `/manage/addboard/${data.userId}/${data.postId}`
  );
  return response.data;
}
function* removePBoard(action) {
  try {
    const data = yield call(removePBoardAPI, action.data);
    yield put({ type: REMOVE_PBOARD_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: REMOVE_PBOARD_ERROR, error: e.response.data });
  }
}
function* watchRemovePBoard() {
  yield takeEvery(REMOVE_PBOARD_REQUEST, removePBoard);
}

export default function* manageSaga() {
  yield all([
    fork(watchAddMember),
    fork(watchRemoveMember),
    fork(watchAddPBoard),
    fork(watchRemovePBoard),
  ]);
}
