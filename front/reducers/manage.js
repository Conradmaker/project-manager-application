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

export const CHANGE_PROGRESS_REQUEST = "manage/CHANGE_PROGRESS_REQUEST";
export const CHANGE_PROGRESS_SUCCESS = "manage/CHANGE_PROGRESS_SUCCESS";
export const CHANGE_PROGRESS_ERROR = "manage/CHANGE_PROGRESS_ERROR";

export const ADD_SCHEDULE_REQUEST = "manage/ADD_SCHEDULE_REQUEST";
export const ADD_SCHEDULE_SUCCESS = "manage/ADD_SCHEDULE_SUCCESS";
export const ADD_SCHEDULE_ERROR = "manage/ADD_SCHEDULE_ERROR";

export const GRADE_MEMBER_REQUEST = "manage/GRADE_MEMBER_REQUEST";
export const GRADE_MEMBER_SUCCESS = "manage/GRADE_MEMBER_SUCCESS";
export const GRADE_MEMBER_ERROR = "manage/GRADE_MEMBER_ERROR";

export const END_PROJECT_REQUEST = "manage/END_PROJECT_REQUEST";
export const END_PROJECT_SUCCESS = "manage/END_PROJECT_SUCCESS";
export const END_PROJECT_ERROR = "manage/END_PROJECT_ERROR";

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

  changeProgressLoading: false,
  changeProgressDone: false,
  changeProgressError: false,

  addScheduleLoading: false,
  addScheduleDone: false,
  addScheduleError: false,

  gradeMemberLoading: false,
  gradeMemberDone: false,
  gradeMemberError: false,

  endProjectLoading: false,
  endProjectDone: false,
  endProjectError: false,
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

      case CHANGE_PROGRESS_REQUEST:
        draft.changeProgressLoading = true;
        draft.changeProgressDone = false;
        draft.changeProgressError = false;
        break;
      case CHANGE_PROGRESS_SUCCESS:
        draft.changeProgressLoading = false;
        draft.changeProgressDone = true;
        draft.changeProgressError = false;
        break;
      case CHANGE_PROGRESS_ERROR:
        draft.changeProgressLoading = false;
        draft.changeProgressDone = false;
        draft.changeProgressError = action.error;
        break;

      case ADD_SCHEDULE_REQUEST:
        draft.addScheduleLoading = true;
        draft.addScheduleDone = false;
        draft.addScheduleError = false;
        break;
      case ADD_SCHEDULE_SUCCESS:
        draft.addScheduleLoading = false;
        draft.addScheduleDone = true;
        draft.addScheduleError = false;
        break;
      case ADD_SCHEDULE_ERROR:
        draft.addScheduleLoading = false;
        draft.addScheduleDone = false;
        draft.addScheduleError = action.error;
        break;

      case GRADE_MEMBER_REQUEST:
        draft.gradeMemberLoading = true;
        draft.gradeMemberDone = false;
        draft.gradeMemberError = false;
        break;
      case GRADE_MEMBER_SUCCESS:
        draft.gradeMemberLoading = false;
        draft.gradeMemberDone = true;
        draft.gradeMemberError = false;
        break;
      case GRADE_MEMBER_ERROR:
        draft.gradeMemberLoading = false;
        draft.gradeMemberDone = false;
        draft.gradeMemberError = action.error;
        break;

      case END_PROJECT_REQUEST:
        draft.endProjectLoading = true;
        draft.endProjectDone = false;
        draft.endProjectError = false;
        break;
      case END_PROJECT_SUCCESS:
        draft.endProjectLoading = false;
        draft.endProjectDone = true;
        draft.endProjectError = false;
        break;
      case END_PROJECT_ERROR:
        draft.endProjectLoading = false;
        draft.endProjectDone = false;
        draft.endProjectError = action.error;
        break;
      default:
        break;
    }
  });
}
