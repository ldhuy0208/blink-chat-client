import { combineReducers } from "redux";
import conversationReducer from "./conversationReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
  theme: themeReducer,
  conversation: conversationReducer,
  user: userReducer,
});
