// Core
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import { uiReducer as ui } from "../bus/ui/reducer";
import { notificationReducer as notification } from "../bus/notification/reducer";
import { authorsReducer as authors } from "../bus/authors/reducer";
import { booksReducer as books } from "../bus/books/reducer";

// Roots
import { history } from "./rootHistory";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  ui,
  notification,
  authors,
  books,
});
