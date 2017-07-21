import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

import Header from "../components/Header";

import "../css/reset.css";
import "../css/base.css";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="M6 WEB TECH"
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          />
          <Header />
          {this.props.children()}
        </div>
      </ThemeProvider>
    );
  }
}
