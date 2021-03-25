import types from "actions/types";

const conversationReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_CONVERSATION:
      return action.payload
    default:
      return state;
  }
};

export default conversationReducer;
