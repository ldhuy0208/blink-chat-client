import types from "actions/types";

const init = {
  current: null,
  loading: true,
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        current: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
