import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme/muiTheme";
//import "polyfills/index";
import "./index.css";

ReactDOM.render(
  <I18nextProvider i18n={i18n()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();