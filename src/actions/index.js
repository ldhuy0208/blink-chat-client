import types from "./types";

export const setTheme = (theme) => {
  return {
    type: types.SET_THEME,
    payload: theme,
  };
};

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};
