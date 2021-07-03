import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
