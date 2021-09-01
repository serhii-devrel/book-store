// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { authorsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

// REST
import { RESTService } from "../../../../REST/service";

export function* getAuthor({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(RESTService, RESTService.authors.getAuthor, [
      payload,
    ]);
    const { status, statusText, data: author } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }

    yield put(authorsActions.setAuthor(author));
  } catch (error) {
    yield put(uiActions.emitError(error, "getAuthor worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
