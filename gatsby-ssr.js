import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(bodyComponent));
  const styleElement = sheet.getStyleElement();

  replaceBodyHTMLString(html);
  setHeadComponents(styleElement);
};
