import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <ToastContainer />
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
