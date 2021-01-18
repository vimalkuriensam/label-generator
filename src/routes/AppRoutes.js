import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Header from "../core/components/header/Header";
import Login from "../core/components/login/Login";
import Wizard from "../core/components/wizard/wizard";
import ScrollTop from "../utils/scroll-top/ScrollTop";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Router>
    <Header />
    <ScrollTop />
    <Switch>
      <PrivateRoute path="/" component={Wizard} exact={true} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default AppRoutes;
