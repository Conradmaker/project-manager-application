export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "user/LOG_IN_ERROR";

const initialState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: false,

  logInLoading: false,
  logInDone: false,
  logInError: false,

  me: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        signUpError: false,
        me: action.data,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: false,
        signUpError: action.error,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        logInError: false,
        me: action.data,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        logInLoading: false,
        logInDone: false,
        logInError: action.error,
      };
    default:
      return state;
  }
}
