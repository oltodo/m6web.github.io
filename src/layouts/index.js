import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

import "../css/typography.css";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <ThemeProvider theme={theme}>
            {this.props.children()}
        </ThemeProvider>
      </div>
    );
  }
}
