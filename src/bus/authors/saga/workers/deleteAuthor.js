// Core
import { put, apply } from "redux-saga/effects";

// Actions
import { authorsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { notificationActions } from "../../../notification/actions";
import { notificationID } from "../../../notification/notificationID";

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

    yield put(
      notificationActions.showNotification(
        notificationID.info,
        "info",
        "deleteAuthor worker",
        "Delete author",
        "Author was successfully deleted"
      )
    );
    yield put(authorsActions.getAuthorsAsync());
  } catch (error) {
    yield put(uiActions.emitError(error, "deleteAuthor worker"));
    yield put(
      notificationActions.showNotification(
        notificationID.error,
        "error",
        "deleteAuthor worker",
        "Delete author",
        "Something went wrong, try again later..."
      )
    );
  } finally {
    yield put(uiActions.stopFetching());
    yield put(notificationActions.hideNotification());
  }
}
