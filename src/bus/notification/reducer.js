// Types
import { notificationTypes } from "./types";

const initialState = {};

export const notificationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case notificationTypes.SHOW_NOTIFICATION:
      return { ...payload };
    case notificationTypes.HIDE_NOTIFICATION:
      return {};
    default:
      return state;
  }
};
