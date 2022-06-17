import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
