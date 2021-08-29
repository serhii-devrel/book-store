// Types
import { notificationTypes } from "../types";

// Actions
import { notificationActions } from "../actions";

// Mock
import { notificationMock } from "../__mock__";

describe("notification actions", () => {
  it("action was triggering for show notification", () => {
    expect(
      notificationActions.showNotification(
        notificationMock.id,
        notificationMock.type,
        notificationMock.source,
        notificationMock.message,
        notificationMock.description
      )
    ).toEqual({
      type: notificationTypes.SHOW_NOTIFICATION,
      payload: {
        id: notificationMock.id,
        type: notificationMock.type,
        source: notificationMock.source,
        message: notificationMock.message,
        description: notificationMock.description,
      },
    });
  });

  it("action was triggering for hide notification", () => {
    expect(notificationActions.hideNotification()).toEqual({
      type: notificationTypes.HIDE_NOTIFICATION,
    });
  });
});
