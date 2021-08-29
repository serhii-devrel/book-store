// Reducers
import { notificationReducer } from "../reducer";

// Actions
import { notificationActions } from "../actions";

// Mock
import { notificationMock } from "../__mock__";

const initialState = {};

describe("notification reducer", () => {
  it("should handle default behavior", () => {
    expect(notificationReducer(void 0, {})).toEqual(initialState);
  });

  it("notification was showing", () => {
    expect(
      notificationReducer(
        void 0,
        notificationActions.showNotification(
          notificationMock.id,
          notificationMock.type,
          notificationMock.source,
          notificationMock.message,
          notificationMock.description
        )
      )
    ).toEqual({
      id: notificationMock.id,
      type: notificationMock.type,
      source: notificationMock.source,
      message: notificationMock.message,
      description: notificationMock.description,
    });
  });

  it("notification was hidden", () => {
    expect(
      notificationReducer(void 0, notificationActions.hideNotification())
    ).toEqual(initialState);
  });
});
