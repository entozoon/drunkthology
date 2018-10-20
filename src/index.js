import "core-js/es6";
import React from "react";
import { render } from "react-snapshot";
import "./App.scss";
import App from "./App";
import data from "./data.json";

const rootEl = document.getElementById("root");
render(<App />, rootEl);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(<NextApp />, rootEl);
  });
}

if (process.env.REACT_APP_SITE_URL && "localStorage" in window) {
  window.localStorage.setItem("netlifySiteURL", process.env.REACT_APP_SITE_URL);
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === "global")[0];
