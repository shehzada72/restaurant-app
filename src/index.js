import React from "react";
import ReactDOM from "react-dom";
import AppRoute from "./routes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import "./assets/scss/material-kit-react.scss";

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppRoute />
  </MuiThemeProvider>,
  document.getElementById("root")
);
