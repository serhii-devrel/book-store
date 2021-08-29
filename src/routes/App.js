// Core
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Instruments
import { routes } from "./routes";

// Pages
import { Authors, Books } from "../pages";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path={routes.authors} component={Authors} />
        <Route path={routes.books} component={Books} />
        <Redirect to={routes.authors} />
      </Switch>
    </>
  );
};
