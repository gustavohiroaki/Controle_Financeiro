import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Income from "../pages/Income";
import Outcome from "../pages/Outcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} exact path="/" />
        <Route component={Income} path="/income" />
        <Route component={Outcome} path="/outcome" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
