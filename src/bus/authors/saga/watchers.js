// Core
import { call, all, takeEvery } from "redux-saga/effects";

// Types
import { authorsTypes } from "../types";

// Workers
import { getAuthors, searchAuthors, deleteAuthor } from "./workers";

function* watchGetAuthors() {
  yield takeEvery(authorsTypes.GET_AUTHORS_ASYNC, getAuthors);
}

function* watchSearchAuthors() {
  yield takeEvery(authorsTypes.SEARCH_AUTHOR_ASYNC, searchAuthors);
}

function* watchDeleteAuthor() {
  yield takeEvery(authorsTypes.DELETE_AUTHOR_ASYNC, deleteAuthor);
}

export function* watchAuthors() {
  yield all([
    call(watchGetAuthors),
    call(watchSearchAuthors),
    call(watchDeleteAuthor),
  ]);
}
