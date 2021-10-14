import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Income from "../pages/Income";
import Outcome from "../pages/Outcome";
import Teste from "../pages/Teste";

import DashboardStructure from "../components/structures/DashboardStructure";

const Router = () => {
  return (
    <BrowserRouter>
      <DashboardStructure>
        <Switch>
          <Route component={Dashboard} exact path="/" />
          <Route component={Income} path="/income" />
          <Route component={Outcome} path="/outcome" />
          <Route component={Teste} path="/test" />
        </Switch>
      </DashboardStructure>
    </BrowserRouter>
  );
};

export default Router;
