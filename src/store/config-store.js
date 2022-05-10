import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import appReducers from "./reducers/index.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(thunk)),
);
