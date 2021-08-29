// Types

import { authorsTypes } from "./types";

export const authorsActions = {
  // Sync
  setAuthors: (authors) => {
    return {
      type: authorsTypes.SET_AUTHORS,
      payload: authors,
    };
  },

  // TODO: refactor ???
  clearAuthors: () => {
    return {
      type: authorsTypes.CLEAR_AUTHORS,
    };
  },

  // Async
  getAuthorsAsync: () => {
    return {
      type: authorsTypes.GET_AUTHORS_ASYNC,
    };
  },

  searchAuthorAsync: (pattern) => {
    return {
      type: authorsTypes.SEARCH_AUTHOR_ASYNC,
      payload: pattern,
    };
  },

  deleteAuthorAsync: (id) => {
    return {
      type: authorsTypes.DELETE_AUTHOR_ASYNC,
      payload: id,
    };
  },
};
