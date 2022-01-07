import { combineReducers } from "redux";
import auth from "./auth/index.js"
import chat from "./chat/index.js"

const rootReducer = combineReducers({
  auth,
  chat
});

export default rootReducer;