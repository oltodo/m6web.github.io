import {
  createStore as reduxCreateStore,
  combineReducers,
  compose
} from "redux";

import {
  createResponsiveStateReducer,
  createResponsiveStoreEnhancer
} from "redux-responsive";

import { breakpoints } from "../theme";

const responsiveStoreEnhancer = createResponsiveStoreEnhancer({
  calculateInitialState: false
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const createStore = () =>
  reduxCreateStore(
    combineReducers({
      browser: createResponsiveStateReducer(breakpoints, {
        extraFields: () => ({
          width: typeof window === "object" ? window.innerWidth : 1280
        })
      })
    }),
    composeEnhancers(responsiveStoreEnhancer)
  );

export default createStore;
