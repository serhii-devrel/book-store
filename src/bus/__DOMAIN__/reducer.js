// Types
// import { __DOMAIN__Types } from './types';

const initialState = {};

export const __DOMAIN__Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return { ...state, ...payload };

    default:
      return state;
  }
};
