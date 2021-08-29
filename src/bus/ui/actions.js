// Types
import { uiTypes } from "./types";

export const uiActions = {
  startFetching: () => {
    return {
      type: uiTypes.START_FETCHING,
    };
  },

  stopFetching: () => {
    return {
      type: uiTypes.STOP_FETCHING,
    };
  },

  emitError: (error, meta = null) => {
    /**
     * meta -> workerSaga name
     */
    return {
      type: uiTypes.EMIT_ERROR,
      payload: error,
      meta,
    };
  },
};
