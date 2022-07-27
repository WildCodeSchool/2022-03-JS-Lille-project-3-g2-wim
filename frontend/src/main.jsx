import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import store from "@services/reducers";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position={toast.POSITION.BOTTOM_CENTER}
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
