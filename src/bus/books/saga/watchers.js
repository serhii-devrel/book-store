// Core
import { call, all, takeEvery } from "redux-saga/effects";

// Types
import { booksTypes } from "../types";

// Workers
import { getBooks, findBooksAuthorBased, searchBooks } from "./workers";

function* watchGetBooks() {
  yield takeEvery(booksTypes.GET_BOOKS_ASYNC, getBooks);
}

function* watchSearchBooks() {
  yield takeEvery(booksTypes.SEARCH_BOOKS_ASYNC, searchBooks);
}

function* watchFindBooksAuthorBased() {
  yield takeEvery(
    booksTypes.FIND_BOOKS_AUTHOR_BASED_ASYNC,
    findBooksAuthorBased
  );
}

export function* watchBooks() {
  yield all([
    call(watchGetBooks),
    call(watchFindBooksAuthorBased),
    call(watchSearchBooks),
  ]);
}
