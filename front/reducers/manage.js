import produce from "immer";

export const ADD_MEMBER_REQUEST = "manage/ADD_MEMBER_REQUEST";
export const ADD_MEMBER_SUCCESS = "manage/ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_ERROR = "manage/ADD_MEMBER_ERROR";

const initialState = {
  addMemberLoading: false,
  addMemberDone: false,
  addMemberError: false,
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
      default:
        break;
    }
  });
}
