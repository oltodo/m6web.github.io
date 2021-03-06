import React from "react";
import PropTypes from "prop-types";

import favicon from "./images/favicon.ico";
import favicon16 from "./images/favicon-16x16.png";
import favicon32 from "./images/favicon-32x32.png";

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  };

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="mobile-web-app-capable" content="yes" />

          {this.props.headComponents}

          <link rel="shortcut icon" href={favicon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700,900"
            rel="stylesheet"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
