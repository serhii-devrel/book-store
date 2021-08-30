// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchAuthors } from "../bus/authors/saga/watchers";
import { watchBooks } from "../bus/books/saga/watchers";

export function* rootSaga() {
  yield all([call(watchAuthors), call(watchBooks)]);
}
