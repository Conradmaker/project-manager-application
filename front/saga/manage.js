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
  REMOVE_TODO_ERROR,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_REQUEST,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  TOGGLE_TODO_REQUEST,
  CHANGE_PROGRESS_SUCCESS,
  CHANGE_PROGRESS_ERROR,
  CHANGE_PROGRESS_REQUEST,
  ADD_SCHEDULE_REQUEST,
  ADD_SCHEDULE_SUCCESS,
  ADD_SCHEDULE_ERROR,
  GRADE_MEMBER_SUCCESS,
  GRADE_MEMBER_ERROR,
  GRADE_MEMBER_REQUEST,
  END_PROJECT_REQUEST,
  END_PROJECT_ERROR,
  END_PROJECT_SUCCESS,
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
  const response = await axios.post(`/manage/board/`, data);
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
    `/manage/board/${data.userId}/${data.postId}`
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

//할일추가
async function addTodoAPI(data) {
  const response = await axios.post(`/manage/todo/`, data);
  return response.data;
}
function* addTodo(action) {
  try {
    const data = yield call(addTodoAPI, action.data);
    yield put({ type: ADD_TODO_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: ADD_TODO_ERROR, error: e.response.data });
  }
}
function* watchAddTodo() {
  yield takeEvery(ADD_TODO_REQUEST, addTodo);
}

//할일삭제
async function removeTodoAPI(data) {
  const response = await axios.delete(`/manage/todo/${data}`);
  return response.data;
}
function* removeTodo(action) {
  try {
    const data = yield call(removeTodoAPI, action.data);
    yield put({ type: REMOVE_TODO_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: REMOVE_TODO_ERROR, error: e.response.data });
  }
}
function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO_REQUEST, removeTodo);
}

//할일토글
async function toggleTodoAPI(data) {
  const response = await axios.patch(`/manage/todo/${data}`);
  return response.data;
}
function* toggleTodo(action) {
  try {
    const data = yield call(toggleTodoAPI, action.data);
    yield put({ type: TOGGLE_TODO_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: TOGGLE_TODO_ERROR, error: e.response.data });
  }
}
function* watchToggleTodo() {
  yield takeEvery(TOGGLE_TODO_REQUEST, toggleTodo);
}

//진행상황 변경
async function changeProgressAPI(data) {
  const response = await axios.patch(`/manage/progress/`, data);
  return response.data;
}
function* changeProgress(action) {
  try {
    const data = yield call(changeProgressAPI, action.data);
    yield put({ type: CHANGE_PROGRESS_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: CHANGE_PROGRESS_ERROR, error: e.response.data });
  }
}
function* watchChangeProgress() {
  yield takeEvery(CHANGE_PROGRESS_REQUEST, changeProgress);
}

//일정추가
async function addScheduleAPI(data) {
  const response = await axios.post(`/manage/schedule/`, data);
  return response.data;
}
function* addSchedule(action) {
  try {
    const data = yield call(addScheduleAPI, action.data);
    yield put({ type: ADD_SCHEDULE_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: ADD_SCHEDULE_ERROR, error: e.response.data });
  }
}
function* watchAddSchedule() {
  yield takeEvery(ADD_SCHEDULE_REQUEST, addSchedule);
}

//멤버평가
async function gradeMemberAPI(data) {
  const response = await axios.post(`/manage/grade/`, data);
  return response.data;
}
function* gradeMember(action) {
  try {
    const data = yield call(gradeMemberAPI, action.data);
    yield put({ type: GRADE_MEMBER_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: GRADE_MEMBER_ERROR, error: e.response.data });
  }
}
function* watchGradeMember() {
  yield takeEvery(GRADE_MEMBER_REQUEST, gradeMember);
}

//프로젝트종료
async function endProjectAPI(data) {
  const response = await axios.post(`/manage/end/`, data);
  return response.data;
}
function* endProject(action) {
  try {
    const data = yield call(endProjectAPI, action.data);
    yield put({ type: END_PROJECT_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: END_PROJECT_ERROR, error: e.response.data });
  }
}
function* watchEndProject() {
  yield takeEvery(END_PROJECT_REQUEST, endProject);
}

export default function* manageSaga() {
  yield all([
    fork(watchAddMember),
    fork(watchRemoveMember),
    fork(watchAddPBoard),
    fork(watchRemovePBoard),
    fork(watchAddTodo),
    fork(watchRemoveTodo),
    fork(watchToggleTodo),
    fork(watchChangeProgress),
    fork(watchAddSchedule),
    fork(watchGradeMember),
    fork(watchEndProject),
  ]);
}
