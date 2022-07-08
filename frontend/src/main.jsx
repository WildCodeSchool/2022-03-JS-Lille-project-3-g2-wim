import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@services/reducers";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
