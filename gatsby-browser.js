import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { calculateResponsiveState } from "redux-responsive";

import createStore from "./src/redux/createStore";

const store = createStore();

window.addEventListener("resize", () =>
  store.dispatch(calculateResponsiveState(window))
);

store.dispatch(calculateResponsiveState(window));

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
