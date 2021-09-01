// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { authorsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* deleteAuthor({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(
      RESTService,
      RESTService.authors.deleteAuthor,
      [payload]
    );
    const { status, statusText } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }

    yield put(authorsActions.getAuthorsAsync());
  } catch (error) {
    yield put(uiActions.emitError(error, "deleteAuthor worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
