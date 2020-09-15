export const CREATE_PROJECT_REQUEST = "project/CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "project/CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_ERROR = "project/CREATE_PROJECT_ERROR";

const initialState = {
  createProjectLoading: false,
  createProjectDone: false,
  createProjectError: false,

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

    default:
      return state;
  }
}
