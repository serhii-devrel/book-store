// Types
import { uiTypes } from "./types";

const initialState = {
  isFetching: false,
};

export const uiReducer = (state = initialState, { type }) => {
  switch (type) {
    case uiTypes.START_FETCHING:
      return { ...state, isFetching: true };

    case uiTypes.STOP_FETCHING:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
