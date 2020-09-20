import produce from "immer";

export const ADD_MEMBER_REQUEST = "manage/ADD_MEMBER_REQUEST";
export const ADD_MEMBER_SUCCESS = "manage/ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_ERROR = "manage/ADD_MEMBER_ERROR";

export const ADD_PBOARD_REQUEST = "manage/ADD_PBOARD_REQUEST";
export const ADD_PBOARD_SUCCESS = "manage/ADD_PBOARD_SUCCESS";
export const ADD_PBOARD_ERROR = "manage/ADD_PBOARD_ERROR";

const initialState = {
  addMemberLoading: false,
  addMemberDone: false,
  addMemberError: false,

  addPBoardLoading: false,
  addPBoardDone: false,
  addPBoardError: false,
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
      default:
        break;
    }
  });
}
