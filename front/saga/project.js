const axios = require("axios");
const { put, takeEvery, all, fork, call } = require("redux-saga/effects");
const {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_REQUEST,
} = require("../reducers/project");

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

export default function* projectSaga() {
  yield all([fork(watchCreateProject)]);
}
