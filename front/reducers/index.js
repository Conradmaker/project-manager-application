import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import project from "./project";
import manage from "./manage";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        project,
        manage,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
