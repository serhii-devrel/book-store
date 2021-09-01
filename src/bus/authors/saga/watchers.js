// Core
import { call, all, takeEvery } from "redux-saga/effects";

// Types
import { authorsTypes } from "../types";

// Workers
import {
  getAuthors,
  searchAuthors,
  deleteAuthor,
  getAuthor,
  addAuthor,
  editAuthor,
} from "./workers";

function* watchGetAuthors() {
  yield takeEvery(authorsTypes.GET_AUTHORS_ASYNC, getAuthors);
}

function* watchGetAuthor() {
  yield takeEvery(authorsTypes.GET_AUTHOR_ASYNC, getAuthor);
}

function* watchSearchAuthors() {
  yield takeEvery(authorsTypes.SEARCH_AUTHOR_ASYNC, searchAuthors);
}

function* watchDeleteAuthor() {
  yield takeEvery(authorsTypes.DELETE_AUTHOR_ASYNC, deleteAuthor);
}

function* watchEditAuthor() {
  yield takeEvery(authorsTypes.EDIT_AUTHOR_ASYNC, editAuthor);
}

function* watchAddAuthor() {
  yield takeEvery(authorsTypes.ADD_AUTHOR_ASYNC, addAuthor);
}

export function* watchAuthors() {
  yield all([
    call(watchGetAuthors),
    call(watchGetAuthor),
    call(watchSearchAuthors),
    call(watchDeleteAuthor),
    call(watchEditAuthor),
    call(watchAddAuthor),
  ]);
}
