// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { booksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* findBooksAuthorBased({ payload }) {
  try {
    yield put(booksActions.setSearchPattern(payload.searchValue));
    yield put(uiActions.startFetching());
    const response = yield apply(
      RESTService,
      RESTService.books.findBooksAuthorBased,
      [payload.id]
    );
    const { status, statusText, data } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }

    const book = yield [data];
    yield put(booksActions.setBooks(book));
  } catch (error) {
    yield put(uiActions.emitError(error, "findBooksAuthorBased worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
