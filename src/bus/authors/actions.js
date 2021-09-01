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

  setAuthor: (author) => {
    return {
      type: authorsTypes.SET_AUTHOR,
      payload: author,
    };
  },

  // Async
  getAuthorsAsync: () => {
    return {
      type: authorsTypes.GET_AUTHORS_ASYNC,
    };
  },

  getAuthorAsync: (id) => {
    return {
      type: authorsTypes.GET_AUTHOR_ASYNC,
      payload: id,
    };
  },

  addAuthorAsync: (author) => {
    return {
      type: authorsTypes.ADD_AUTHOR_ASYNC,
      payload: {
        author,
      },
    };
  },

  editAuthorAsync: (id, author) => {
    return {
      type: authorsTypes.EDIT_AUTHOR_ASYNC,
      payload: {
        id,
        author,
      },
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
