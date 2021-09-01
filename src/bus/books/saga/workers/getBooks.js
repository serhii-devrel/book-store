// Core
import { apply, put } from "redux-saga/effects";

// Actions
import { booksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* getBooks() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(RESTService, RESTService.books.getBooks);
    const { status, statusText, data: books } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }

    yield put(booksActions.setBooks(books));
  } catch (error) {
    yield put(uiActions.emitError(error, "getBooks worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
