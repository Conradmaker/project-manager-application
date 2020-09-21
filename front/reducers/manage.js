import produce from "immer";

export const ADD_MEMBER_REQUEST = "manage/ADD_MEMBER_REQUEST";
export const ADD_MEMBER_SUCCESS = "manage/ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_ERROR = "manage/ADD_MEMBER_ERROR";

export const REMOVE_MEMBER_REQUEST = "manage/REMOVE_MEMBER_REQUEST";
export const REMOVE_MEMBER_SUCCESS = "manage/REMOVE_MEMBER_SUCCESS";
export const REMOVE_MEMBER_ERROR = "manage/REMOVE_MEMBER_ERROR";

export const ADD_PBOARD_REQUEST = "manage/ADD_PBOARD_REQUEST";
export const ADD_PBOARD_SUCCESS = "manage/ADD_PBOARD_SUCCESS";
export const ADD_PBOARD_ERROR = "manage/ADD_PBOARD_ERROR";

export const REMOVE_PBOARD_REQUEST = "manage/REMOVE_PBOARD_REQUEST";
export const REMOVE_PBOARD_SUCCESS = "manage/REMOVE_PBOARD_SUCCESS";
export const REMOVE_PBOARD_ERROR = "manage/REMOVE_PBOARD_ERROR";

export const ADD_TODO_REQUEST = "manage/ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "manage/ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "manage/ADD_TODO_ERROR";

export const REMOVE_TODO_REQUEST = "manage/REMOVE_TODO_REQUEST";
export const REMOVE_TODO_SUCCESS = "manage/REMOVE_TODO_SUCCESS";
export const REMOVE_TODO_ERROR = "manage/REMOVE_TODO_ERROR";

export const TOGGLE_TODO_REQUEST = "manage/TOGGLE_TODO_REQUEST";
export const TOGGLE_TODO_SUCCESS = "manage/TOGGLE_TODO_SUCCESS";
export const TOGGLE_TODO_ERROR = "manage/TOGGLE_TODO_ERROR";

const initialState = {
  addMemberLoading: false,
  addMemberDone: false,
  addMemberError: false,

  removeMemberLoading: false,
  removeMemberDone: false,
  removeMemberError: false,

  addPBoardLoading: false,
  addPBoardDone: false,
  addPBoardError: false,

  removePBoardLoading: false,
  removePBoardDone: false,
  removePBoardError: false,

  addTodoLoading: false,
  addTodoDone: false,
  addTodoError: false,

  removeTodoLoading: false,
  removeTodoDone: false,
  removeTodoError: false,

  toggleTodoLoading: false,
  toggleTodoDone: false,
  toggleTodoError: false,
};

export default function manage(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_MEMBER_REQUEST:
        draft.addMemberLoading = true;
        draft.addMemberDone = false;
        draft.addMemberError = false;
        break;
      case ADD_MEMBER_SUCCESS:
        draft.addMemberLoading = false;
        draft.addMemberDone = true;
        draft.addMemberError = false;
        break;
      case ADD_MEMBER_ERROR:
        draft.addMemberLoading = false;
        draft.addMemberDone = false;
        draft.addMemberError = action.error;
        break;

      case REMOVE_MEMBER_REQUEST:
        draft.removeMemberLoading = true;
        draft.removeMemberDone = false;
        draft.removeMemberError = false;
        break;
      case REMOVE_MEMBER_SUCCESS:
        draft.removeMemberLoading = false;
        draft.removeMemberDone = true;
        draft.removeMemberError = false;
        break;
      case REMOVE_MEMBER_ERROR:
        draft.removeMemberLoading = false;
        draft.removeMemberDone = false;
        draft.removeMemberError = action.error;
        break;

      case ADD_PBOARD_REQUEST:
        draft.addPBoardLoading = true;
        draft.addPBoardDone = false;
        draft.addPBoardError = false;
        break;
      case ADD_PBOARD_SUCCESS:
        draft.addPBoardLoading = false;
        draft.addPBoardDone = true;
        draft.addPBoardError = false;
        break;
      case ADD_PBOARD_ERROR:
        draft.addPBoardLoading = false;
        draft.addPBoardDone = false;
        draft.addPBoardError = action.error;
        break;

      case REMOVE_PBOARD_REQUEST:
        draft.removePBoardLoading = true;
        draft.removePBoardDone = false;
        draft.removePBoardError = false;
        break;
      case REMOVE_PBOARD_SUCCESS:
        draft.removePBoardLoading = false;
        draft.removePBoardDone = true;
        draft.removePBoardError = false;
        break;
      case REMOVE_PBOARD_ERROR:
        draft.removePBoardLoading = false;
        draft.removePBoardDone = false;
        draft.removePBoardError = action.error;
        break;

      case ADD_TODO_REQUEST:
        draft.addTodoLoading = true;
        draft.addTodoDone = false;
        draft.addTodoError = false;
        break;
      case ADD_TODO_SUCCESS:
        draft.addTodoLoading = false;
        draft.addTodoDone = true;
        draft.addTodoError = false;
        break;
      case ADD_TODO_ERROR:
        draft.addTodoLoading = false;
        draft.addTodoDone = false;
        draft.addTodoError = action.error;
        break;

      case REMOVE_TODO_REQUEST:
        draft.removeTodoLoading = true;
        draft.removeTodoDone = false;
        draft.removeTodoError = false;
        break;
      case REMOVE_TODO_SUCCESS:
        draft.removeTodoLoading = false;
        draft.removeTodoDone = true;
        draft.removeTodoError = false;
        break;
      case REMOVE_TODO_ERROR:
        draft.removeTodoLoading = false;
        draft.removeTodoDone = false;
        draft.removeTodoError = action.error;
        break;

      case TOGGLE_TODO_REQUEST:
        draft.toggleTodoLoading = true;
        draft.toggleTodoDone = false;
        draft.toggleTodoError = false;
        break;
      case TOGGLE_TODO_SUCCESS:
        draft.toggleTodoLoading = false;
        draft.toggleTodoDone = true;
        draft.toggleTodoError = false;
        break;
      case TOGGLE_TODO_ERROR:
        draft.toggleTodoLoading = false;
        draft.toggleTodoDone = false;
        draft.toggleTodoError = action.error;
        break;
      default:
        break;
    }
  });
}
