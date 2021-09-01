import { put, apply } from "redux-saga/effects";

// Actions
import { uiActions } from "../../../ui/actions";
import { authorsActions } from "../../actions";
import { notificationActions } from "../../../notification/actions";
import { notificationID } from "../../../notification/notificationID";

// REST
import { RESTService } from "../../../../REST/service";

export function* editAuthor({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(RESTService, RESTService.authors.editAuthor, [
      payload.id,
      payload.author,
    ]);
    const { status, statusText, data: author } = response;

    if (status !== 200) {
      throw new Error(statusText);
    }
    yield put(authorsActions.getAuthorsAsync());
    yield put(authorsActions.setAuthor(author));
    yield put(
      notificationActions.showNotification(
        notificationID.success,
        "success",
        "editAuthor worker",
        "Edit author",
        "Author was successfully edited"
      )
    );
  } catch (error) {
    yield put(uiActions.emitError(error, "editAuthor worker"));
    yield put(
      notificationActions.showNotification(
        notificationID.error,
        "error",
        "editAuthor worker",
        "Edit author",
        "Something went wrong, try again later..."
      )
    );
  } finally {
    yield put(uiActions.stopFetching());
    yield put(notificationActions.hideNotification());
  }
}
