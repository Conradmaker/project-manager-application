const axios = require("axios");
const { all, fork, takeEvery, call, put } = require("redux-saga/effects");
const {
  ADD_MEMBER_ERROR,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_PBOARD_SUCCESS,
  ADD_PBOARD_ERROR,
  ADD_PBOARD_REQUEST,
} = require("../reducers/manage");
//멤버추가
async function addMemberAPI(data) {
  const response = await axios.post(`/manage/addmember/${data}`);
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

export default function* manageSaga() {
  yield all([fork(watchAddMember), fork(watchAddPBoard)]);
}
