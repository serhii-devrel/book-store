// Types
import { booksTypes } from "./types";

const initialState = {
  books: [],
  pattern: "",
};

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case booksTypes.SET_BOOKS:
      return { ...state, books: payload };
    case booksTypes.SET_SEARCH_PATTERN:
      return { ...state, pattern: payload };
    case booksTypes.CLEAR_SEARCH_PATTERN:
      return { ...state, pattern: "" };
    default:
      return state;
  }
};
