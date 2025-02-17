import { UserActionTypes } from "../actions/types";

const initialState = {
  user: {
    uid: null,
  },
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
