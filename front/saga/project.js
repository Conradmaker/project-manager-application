const axios = require("axios");
const { put, takeEvery, all, fork, call } = require("redux-saga/effects");
const {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_REQUEST,
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_ERROR,
  LOAD_PROJECTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_ERROR,
} = require("../reducers/project");

//프로젝트 생성
async function createProjectAPI(data) {
  const response = await axios.post("/project/create", data);
  return response.data;
}
function* createProject(action) {
  try {
    const data = yield call(createProjectAPI, action.data);
    yield put({ type: CREATE_PROJECT_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: CREATE_PROJECT_ERROR, error: e.response.data });
  }
}
function* watchCreateProject() {
  yield takeEvery(CREATE_PROJECT_REQUEST, createProject);
}

//프로젝트 리스트 불러오기
async function loadProjectsAPI() {
  const response = await axios.get("/project/load");
  return response.data;
}
function* loadProjects() {
  try {
    const data = yield call(loadProjectsAPI);
    yield put({ type: LOAD_PROJECTS_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: LOAD_PROJECTS_ERROR, error: e.response.data });
  }
}
function* watchLoadProject() {
  yield takeEvery(LOAD_PROJECTS_REQUEST, loadProjects);
}

//댓글작성
async function addCommentAPI(data) {
  const response = await axios.post(`/project/comment/${data.id}`, data);
  console.log(response.data);
  return response.data;
}

function* addComment(action) {
  try {
    const data = yield call(addCommentAPI, action.data);
    yield put({ type: ADD_COMMENT_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: ADD_COMMENT_ERROR, error: e.response.data });
  }
}

function* watchAddComment() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}
export default function* projectSaga() {
  yield all([
    fork(watchCreateProject),
    fork(watchLoadProject),
    fork(watchAddComment),
  ]);
}
