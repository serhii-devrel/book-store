// Core
import { applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { history } from "../rootHistory";

// Middleware
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005",
  },
});

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  typeof window === "object" && devtools ? devtools : compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV) {
  middlewares.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middlewares));

export { enhancedStore, sagaMiddleware };
