import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
const app = (
  <BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={Index} />
</BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();