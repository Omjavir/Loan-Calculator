import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
