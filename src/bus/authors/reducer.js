// Types
import { authorsTypes } from "./types";

const initialState = [];

export const authorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authorsTypes.SET_AUTHORS:
      return payload;
    case authorsTypes.CLEAR_AUTHORS:
      return [];
    default:
      return state;
  }
};
