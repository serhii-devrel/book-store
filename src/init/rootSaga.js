// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchAuthors } from "../bus/authors/saga/watchers";

export function* rootSaga() {
  yield all([call(watchAuthors)]);
}
