import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes/appRoutes";

import "./styles/main.scss";

const connectedComponents = (
  <div>
    <AppRoutes />
  </div>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
