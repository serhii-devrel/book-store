import { put, apply } from "redux-saga/effects";

// Actions
import { uiActions } from "../../../ui/actions";
import { authorsActions } from "../../actions";
import { notificationActions } from "../../../notification/actions";
import { notificationID } from "../../../notification/notificationID";

// REST
import { RESTService } from "../../../../REST/service";

export function* addAuthor({ payload }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(RESTService, RESTService.authors.addAuthor, [
      {
        ...payload.author,
        books: [],
      },
    ]);
    const { status, statusText } = response;

    if (status !== 201) {
      throw new Error(statusText);
    }

    yield put(authorsActions.getAuthorsAsync());
    yield put(
      notificationActions.showNotification(
        notificationID.success,
        "success",
        "addAuthor worker",
        "Add author",
        "Author was successfully added"
      )
    );
  } catch (error) {
    yield put(uiActions.emitError(error, "addAuthor worker"));
    yield put(
      notificationActions.showNotification(
        notificationID.error,
        "error",
        "addAuthor worker",
        "Add author",
        "Something went wrong, try again later..."
      )
    );
  } finally {
    yield put(uiActions.stopFetching());
    yield put(notificationActions.hideNotification());
  }
}
