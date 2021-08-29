// Core
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "antd/dist/antd.css";

// Init
import { store } from "./init/store";
import { history } from "./init/rootHistory";

// Components
import { Notification } from "./components";
import { App } from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Notification />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
