import { combineReducers } from "redux";
import selectedMessageReducer from "./selectedMessageReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
  theme: themeReducer,
  selectedMessage: selectedMessageReducer,
  user: userReducer,
});
