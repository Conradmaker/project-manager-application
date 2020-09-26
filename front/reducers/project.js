import produce from "immer";
import {
  ADD_MEMBER_SUCCESS,
  ADD_PBOARD_SUCCESS,
  ADD_SCHEDULE_SUCCESS,
  ADD_TODO_SUCCESS,
  CHANGE_PROGRESS_SUCCESS,
  END_PROJECT_SUCCESS,
  REMOVE_MEMBER_SUCCESS,
  REMOVE_PBOARD_SUCCESS,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
} from "./manage";

export const CREATE_PROJECT_REQUEST = "project/CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "project/CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_ERROR = "project/CREATE_PROJECT_ERROR";

export const LOAD_PROJECTS_REQUEST = "project/LOAD_PROJECTS_REQUEST";
export const LOAD_PROJECTS_SUCCESS = "project/LOAD_PROJECTS_SUCCESS";
export const LOAD_PROJECTS_ERROR = "project/LOAD_PROJECTS_ERROR";

export const ADD_COMMENT_REQUEST = "project/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "project/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "project/ADD_COMMENT_ERROR";

export const REMOVE_COMMENT_REQUEST = "project/REMOVE_COMMENT_REQUEST";
export const REMOVE_COMMENT_SUCCESS = "project/REMOVE_COMMENT_SUCCESS";
export const REMOVE_COMMENT_ERROR = "project/REMOVE_COMMENT_ERROR";

export const LOAD_PROJECT_REQUEST = "project/LOAD_PROJECT_REQUEST";
export const LOAD_PROJECT_SUCCESS = "project/LOAD_PROJECT_SUCCESS";
export const LOAD_PROJECT_ERROR = "project/LOAD_PROJECT_ERROR";

export const LOAD_CATAGORY_REQUEST = "project/LOAD_CATAGORY_REQUEST";
export const LOAD_CATAGORY_SUCCESS = "project/LOAD_CATAGORY_SUCCESS";
export const LOAD_CATAGORY_ERROR = "project/LOAD_CATAGORY_ERROR";

export const SEARCH_PROJECT_REQUEST = "project/SEARCH_PROJECT_REQUEST";
export const SEARCH_PROJECT_SUCCESS = "project/SEARCH_PROJECT_SUCCESS";
export const SEARCH_PROJECT_ERROR = "project/SEARCH_PROJECT_ERROR";

export const UPLOAD_IMAGES_REQUEST = "project/UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "project/UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_ERROR = "project/UPLOAD_IMAGES_ERROR";

const initialState = {
  createProjectLoading: false,
  createProjectDone: false,
  createProjectError: false,

  loadProjectsLoading: false,
  loadProjectsDone: false,
  loadProjectsError: false,

  loadProjectLoading: false,
  loadProjectDone: false,
  loadProjectError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,

  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: false,

  loadCatagoryLoading: false,
  loadCatagoryDone: false,
  loadCatagoryError: null,

  searchProjectLoading: false,
  searchProjectDone: false,
  searchProjectError: null,

  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,

  projectList: [],
  projectInfo: {},
  image: [],
};

const project = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_PROJECT_REQUEST:
        draft.searchProjectLoading = true;
        draft.searchProjectDone = false;
        draft.searchProjectError = false;
        break;
      case SEARCH_PROJECT_SUCCESS:
        draft.searchProjectLoading = false;
        draft.searchProjectDone = true;
        draft.searchProjectError = false;
        draft.projectList = action.data;
        break;
      case SEARCH_PROJECT_ERROR:
        draft.searchProjectLoading = false;
        draft.searchProjectDone = false;
        draft.searchProjectError = action.error;
        break;
      case CREATE_PROJECT_REQUEST:
        draft.createProjectLoading = true;
        draft.createProjectDone = false;
        draft.createProjectError = false;
        break;
      case CREATE_PROJECT_SUCCESS:
        draft.createProjectLoading = false;
        draft.createProjectDone = true;
        draft.createProjectError = false;
        draft.projectList.unshift(action.data);
        break;
      case CREATE_PROJECT_ERROR:
        draft.createProjectLoading = false;
        draft.createProjectDone = false;
        draft.createProjectError = action.error;
        break;
      case LOAD_PROJECTS_REQUEST:
        draft.loadProjectsLoading = true;
        draft.loadProjectsDone = false;
        draft.loadProjectsError = false;
        break;
      case LOAD_PROJECTS_SUCCESS:
        draft.loadProjectsLoading = false;
        draft.loadProjectsDone = true;
        draft.loadProjectsError = false;
        draft.projectList = action.data;
        break;
      case LOAD_PROJECTS_ERROR:
        draft.loadProjectsLoading = false;
        draft.loadProjectsDone = false;
        draft.loadProjectsError = action.error;
        break;
      case LOAD_PROJECT_REQUEST:
        draft.loadProjectLoading = true;
        draft.loadProjectDone = false;
        draft.loadProjectError = false;
        break;
      case LOAD_PROJECT_SUCCESS:
        draft.loadProjectLoading = false;
        draft.loadProjectDone = true;
        draft.loadProjectError = false;
        draft.projectInfo = action.data;
        break;
      case LOAD_PROJECT_ERROR:
        draft.loadProjectLoading = false;
        draft.loadProjectDone = false;
        draft.loadProjectError = action.error;
        break;
      case LOAD_CATAGORY_REQUEST:
        draft.loadCatagoryLoading = true;
        draft.loadCatagoryDone = false;
        draft.loadCatagoryError = false;
        break;
      case LOAD_CATAGORY_SUCCESS:
        draft.loadCatagoryLoading = false;
        draft.loadCatagoryDone = true;
        draft.loadCatagoryError = false;
        draft.projectList = action.data;
        break;
      case LOAD_CATAGORY_ERROR:
        draft.loadCatagoryLoading = false;
        draft.loadCatagoryDone = false;
        draft.loadCatagoryError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = false;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.uploadImagesError = false;
        draft.image = action.data;
        break;
      case UPLOAD_IMAGES_ERROR:
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = false;
        break;
      case ADD_COMMENT_SUCCESS:
        const item = draft.projectList.find(
          (v) => action.data.EBoardId === v.id
        );
        item.EComments.push(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.addCommentError = false;
        break;
      case ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = false;
        break;
      case REMOVE_COMMENT_SUCCESS:
        const i = draft.projectList.findIndex(
          (v) => action.data.EBoardId === v.id
        );
        draft.projectList[i].EComments = draft.projectList[i].EComments.filter(
          (v) => v.id !== action.data.CommentId
        );
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        draft.removeCommentError = false;
        break;
      case REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentDone = false;
        draft.removeCommentError = action.error;
        break;
      case ADD_MEMBER_SUCCESS:
        const currentProject = draft.projectList.find(
          (v) => v.id === action.data.projectId
        );
        const currentEComments = currentProject.EComments.find(
          (v) => v.UserId === action.data.user.id
        );
        currentEComments.User.ProjectId = action.data.projectId;
        break;
      case ADD_PBOARD_SUCCESS:
        draft.projectInfo.PBoards.unshift(action.data);
      case REMOVE_PBOARD_SUCCESS:
        draft.projectInfo.PBoards = draft.projectInfo.PBoards.filter(
          (v) => v.id !== action.data
        );
        break;
      case REMOVE_MEMBER_SUCCESS:
        draft.projectInfo.Users = draft.projectInfo.Users.filter(
          (v) => v.id !== action.data
        );
        break;
      case ADD_TODO_SUCCESS:
        const todo = [...draft.projectInfo.Todos];
        todo.unshift(action.data);
        draft.projectInfo.Todos = todo;
        break;
      case REMOVE_TODO_SUCCESS:
        draft.projectInfo.Todos = draft.projectInfo.Todos.filter(
          (v) => v.id !== action.data
        );
        break;
      case TOGGLE_TODO_SUCCESS:
        const selectedTodo = draft.projectInfo.Todos.find(
          (v) => v.id === action.data
        );
        selectedTodo.done = !selectedTodo.done;
        break;
      case CHANGE_PROGRESS_SUCCESS:
        draft.projectInfo.progress = action.data;
        break;
      case ADD_SCHEDULE_SUCCESS:
        draft.projectInfo.Schedules.push(action.data);
        break;
      case END_PROJECT_SUCCESS:
        draft.projectInfo = null;
        break;
      default:
        break;
    }
  });

export default project;
