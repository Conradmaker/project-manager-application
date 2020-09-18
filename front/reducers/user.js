import produce from "immer";

export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "user/LOG_IN_ERROR";

export const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "user/LOG_OUT_ERROR";

export const LOAD_MY_INFO_REQUEST = "user/LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "user/LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_ERROR = "user/LOAD_MY_INFO_ERROR";

const initialState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: false,

  logInLoading: false,
  logInDone: false,
  logInError: false,

  logOutLoading: false,
  logOutDone: false,
  logOutError: false,

  loadMyInfoLoading: false,
  loadMyInfoSuccess: false,
  loadMyInfoError: false,

  me: null,
};

const user = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.signUpError = false;
        break;
      case SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = false;
        draft.me = action.data;
        break;
      case LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.logOutError = false;
        draft.me = null;
        break;
      case LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoSuccess = false;
        draft.loadMyInfoError = false;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoSuccess = false;
        draft.loadMyInfoError = false;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoSuccess = false;
        draft.loadMyInfoError = false;
        break;
      default:
        break;
    }
  });

export default user;
