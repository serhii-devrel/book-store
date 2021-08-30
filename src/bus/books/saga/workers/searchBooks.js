// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { booksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* searchBooks({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(RESTService, RESTService.books.searchBooks, [
      payload,
    ]);
    const { status, statusText, data: books } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }
    yield put(booksActions.setBooks(books));
  } catch (error) {
    yield put(uiActions.emitError(error, "searchBooks worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
