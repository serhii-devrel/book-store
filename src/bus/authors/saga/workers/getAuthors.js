// Core
import { apply, put } from "redux-saga/effects";

// Actions
import { authorsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { booksActions } from "../../../books/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* getAuthors() {
  try {
    yield put(uiActions.startFetching());
    yield put(booksActions.clearSearchPattern());
    const response = yield apply(RESTService, RESTService.authors.getAuthors);
    const { status, statusText, data: authors } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }
    yield put(authorsActions.setAuthors(authors));
  } catch (error) {
    yield put(uiActions.emitError(error, "getAuthors worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
