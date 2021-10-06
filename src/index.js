import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./containers/App";
import GlobalState from "./containers/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
