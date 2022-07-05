import { combineReducers, createStore } from "redux";
import user from "./user";

const mainReducer = combineReducers({ user });
export default createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// NB: createStore is deprecated, there's a package named @reduxjs/toolkit which is the official way to install/configure redux.
// I'll probably do a second repo to see how it works, but this one works just fine for learning purposes
