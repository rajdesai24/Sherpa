import { combineReducers } from "redux";
import auth from "./auth/index.js"
import chat from "./chat/index.js"
import club from "./club/index.js"

const rootReducer = combineReducers({
  auth,
  chat,
  club
});

export default rootReducer;