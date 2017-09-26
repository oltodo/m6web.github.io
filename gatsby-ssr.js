import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import createStore from "./src/redux/createStore";

const store = createStore();

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const ConnectedBody = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  );

  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents(styleElement);
};
