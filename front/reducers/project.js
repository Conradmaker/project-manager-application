export const CREATE_PROJECT_REQUEST = "project/CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "project/CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_ERROR = "project/CREATE_PROJECT_ERROR";

export const LOAD_PROJECTS_REQUEST = "project/LOAD_PROJECTS_REQUEST";
export const LOAD_PROJECTS_SUCCESS = "project/LOAD_PROJECTS_SUCCESS";
export const LOAD_PROJECTS_ERROR = "project/LOAD_PROJECTS_ERROR";

const initialState = {
  createProjectLoading: false,
  createProjectDone: false,
  createProjectError: false,

  loadProjectsLoading: false,
  loadProjectsDone: false,
  loadProjectsError: false,

  projectList: [],
};

export default function project(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
        createProjectLoading: true,
        createProjectDone: false,
        createProjectError: false,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createProjectLoading: false,
        createProjectDone: true,
        createProjectError: false,
        projectList: [action.data, ...state.projectList],
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        createProjectLoading: false,
        createProjectDone: false,
        createProjectError: action.error,
      };
    case LOAD_PROJECTS_REQUEST:
      return {
        ...state,
        loadProjectsLoading: true,
        loadProjectsDone: false,
        loadProjectsError: false,
      };
    case LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        loadProjectsLoading: false,
        loadProjectsDone: true,
        loadProjectsError: false,

        projectList: action.data,
      };
    case LOAD_PROJECTS_ERROR:
      return {
        ...state,
        loadProjectsLoading: false,
        loadProjectsDone: false,
        loadProjectsError: action.error,
      };
    default:
      return state;
  }
}
