import { combineReducers } from "redux";
import selectedMessageReducer from "./selectedMessageReducer";
import themeReducer from "./themeReducer";

export const reducers = combineReducers({
  theme: themeReducer,
  selectedMessage: selectedMessageReducer,
});
