import produce from "immer";
import {
  ADD_MEMBER_SUCCESS,
  ADD_PBOARD_SUCCESS,
  ADD_TODO_SUCCESS,
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

  projectList: [],
  projectInfo: {},
};

const project = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
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
        console.log(draft.projectList);
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
        console.log(action.data);
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
      default:
        break;
    }
  });

export default project;
