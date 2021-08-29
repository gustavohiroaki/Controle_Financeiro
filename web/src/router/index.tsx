import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Income from "../pages/Income";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} exact path="/" />
        <Route component={Income} path="/income" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
