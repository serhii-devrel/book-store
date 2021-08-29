// Types
import { notificationTypes } from "./types";

export const notificationActions = {
  // Sync
  showNotification: (id, type, source, message, description) => {
    return {
      type: notificationTypes.SHOW_NOTIFICATION,
      payload: {
        id,
        type,
        source,
        message,
        description,
      },
    };
  },

  hideNotification: () => {
    return {
      type: notificationTypes.HIDE_NOTIFICATION,
    };
  },
};
