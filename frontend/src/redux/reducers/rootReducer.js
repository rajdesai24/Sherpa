import { combineReducers } from "redux";
import auth from "./auth/index.js"
import chat from "./chat/index.js"
import club from "./club/index.js"
import ChatRoom from "./chat/index.js"

const rootReducer = combineReducers({
  auth,
  chat,
  club,
  ChatRoom
});

export default rootReducer;