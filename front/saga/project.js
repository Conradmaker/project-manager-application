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
  REMOVE_COMMENT_ERROR,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_ERROR,
  LOAD_PROJECT_REQUEST,
  LOAD_CATAGORY_SUCCESS,
  LOAD_CATAGORY_ERROR,
  LOAD_CATAGORY_REQUEST,
  SEARCH_PROJECT_SUCCESS,
  SEARCH_PROJECT_ERROR,
  SEARCH_PROJECT_REQUEST,
  UPLOAD_IMAGES_ERROR,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_REQUEST,
} = require("../reducers/project");

//프로젝트 생성
async function createProjectAPI(data) {
  console.log(data);
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

//프로젝트 검색결과 불러오기
async function searchProjectAPI(data) {
  const response = await axios.get(
    `/project/search/${encodeURIComponent(data)}`
  );
  return response.data;
}
function* searchProject(action) {
  try {
    const data = yield call(searchProjectAPI, action.data);
    yield put({ type: SEARCH_PROJECT_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: SEARCH_PROJECT_ERROR, error: e.response.data });
  }
}
function* watchsearchProject() {
  yield takeEvery(SEARCH_PROJECT_REQUEST, searchProject);
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
function* watchLoadProjects() {
  yield takeEvery(LOAD_PROJECTS_REQUEST, loadProjects);
}

//카테고리 리스트 불러오기
async function loadCatagoryAPI(data) {
  const response = await axios.get(`/project/load/catagory/${data}`);
  return response.data;
}
function* loadCatagory(action) {
  try {
    const data = yield call(loadCatagoryAPI, action.data);
    yield put({ type: LOAD_CATAGORY_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: LOAD_CATAGORY_ERROR, error: e.response.data });
  }
}
function* watchLoadCatagory() {
  yield takeEvery(LOAD_CATAGORY_REQUEST, loadCatagory);
}

//댓글작성
async function addCommentAPI(data) {
  const response = await axios.post(`/project/comment/${data.id}`, data);
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

//댓글삭제
async function removeCommentAPI(data) {
  const response = await axios.delete(`/project/delete/${data}`);
  return response.data;
}
function* removeComment(action) {
  try {
    const data = yield call(removeCommentAPI, action.data);
    yield put({ type: REMOVE_COMMENT_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: REMOVE_COMMENT_ERROR, error: e.response.data });
  }
}
function* watchRemoveComment() {
  yield takeEvery(REMOVE_COMMENT_REQUEST, removeComment);
}

//프로젝트 정보 가져오기
async function loadProjectAPI(data) {
  const response = await axios.get(`/project/load/${data}`);
  return response.data;
}
function* loadProject(action) {
  try {
    const data = yield call(loadProjectAPI, action.data);
    console.log(data);
    yield put({ type: LOAD_PROJECT_SUCCESS, data });
  } catch (e) {
    console.log("시작");
    console.error(e);
    yield put({ type: LOAD_PROJECT_ERROR, error: e.response.data });
  }
}
function* watchLoadProject() {
  yield takeEvery(LOAD_PROJECT_REQUEST, loadProject);
}

//이미지 업로드
async function uploadImagesAPI(data) {
  const response = await axios.post(`/project/image`, data);
  return response.data;
}
function* uploadImages(action) {
  try {
    const data = yield call(uploadImagesAPI, action.data);
    console.log(data);
    yield put({ type: UPLOAD_IMAGES_SUCCESS, data });
  } catch (e) {
    console.error(e);
    yield put({ type: UPLOAD_IMAGES_ERROR, error: e.response.data });
  }
}
function* watchUploadImages() {
  yield takeEvery(UPLOAD_IMAGES_REQUEST, uploadImages);
}
export default function* projectSaga() {
  yield all([
    fork(watchCreateProject),
    fork(watchLoadProject),
    fork(watchLoadProjects),
    fork(watchAddComment),
    fork(watchRemoveComment),
    fork(watchLoadCatagory),
    fork(watchsearchProject),
    fork(watchUploadImages),
  ]);
}
