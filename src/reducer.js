import { combineReducers } from "redux";
import { SET_AUTHED_USER, DELETE_AUTHED_USER } from "./actions";
import { loadingBarReducer } from "react-redux-loading";
function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case DELETE_AUTHED_USER:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
});
