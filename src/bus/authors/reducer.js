// Types
import { authorsTypes } from "./types";

const initialState = {
  authors: [],
  author: {},
};

export const authorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authorsTypes.SET_AUTHORS:
      return { ...state, authors: payload };
    case authorsTypes.SET_AUTHOR:
      return { ...state, author: payload };
    default:
      return state;
  }
};
