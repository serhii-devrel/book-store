// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { authorsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* searchAuthors({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(
      RESTService,
      RESTService.authors.searchAuthor,
      [payload]
    );
    const { status, statusText, data: authors } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }

    yield put(authorsActions.setAuthors(authors));
  } catch (error) {
    yield put(uiActions.emitError(error, "searchAuthors worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
