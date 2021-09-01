// Types
import { authorsTypes } from "./types";

const initialState = {
  authors: [],
  author: {},
  pattern: "",
};

export const authorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authorsTypes.SET_AUTHORS:
      return { ...state, authors: payload };
    case authorsTypes.SET_AUTHOR:
      return { ...state, author: payload };
    case authorsTypes.SET_SEARCH_PATTERN:
      return { ...state, pattern: payload };
    case authorsTypes.CLEAR_SEARCH_PATTERN:
      return { ...state, pattern: "" };
    default:
      return state;
  }
};
