import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "../product/screens/Details";

// import HomeScreen from "./screens/Home";

const Routes = () => {
  return (
    <Switch>
      <Route component={DetailsScreen} path="/" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
