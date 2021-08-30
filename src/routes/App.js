// Core
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Instruments
import { routes, dynamicRoutes } from "./routes";

// Pages
import { Authors, Books } from "../pages";

export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={routes.authors} component={Authors} />
        <Route exact path={routes.books} component={Books} />
        <Route path={dynamicRoutes.authoredBooks} component={Books} />
        <Redirect to={routes.authors} />
      </Switch>
    </>
  );
};
