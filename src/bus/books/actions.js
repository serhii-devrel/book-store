// Types
import { booksTypes } from "./types";

export const booksActions = {
  // Sync
  setBooks: (books) => {
    return {
      type: booksTypes.SET_BOOKS,
      payload: books,
    };
  },

  setSearchPattern: (pattern) => {
    return {
      type: booksTypes.SET_SEARCH_PATTERN,
      payload: pattern,
    };
  },

  clearSearchPattern: () => {
    return {
      type: booksTypes.CLEAR_SEARCH_PATTERN,
    };
  },

  // Async
  getBooksAsync: () => {
    return {
      type: booksTypes.GET_BOOKS_ASYNC,
    };
  },

  searchBooksAsync: (pattern) => {
    return {
      type: booksTypes.SEARCH_BOOKS_ASYNC,
      payload: pattern,
    };
  },

  findBooksAuthorBasedAsync: (id, searchValue) => {
    return {
      type: booksTypes.FIND_BOOKS_AUTHOR_BASED_ASYNC,
      payload: {
        id,
        searchValue,
      },
    };
  },
};
