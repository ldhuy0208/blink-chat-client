import types from "actions/types";

const initState = "light";
export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return action.payload === "dark" ? "dark" : "light";
    default:
      return state;
  }
};
