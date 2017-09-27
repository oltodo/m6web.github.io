import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Container from "../components/Container";
import Link from "../components/Link";
import theme from "../theme";

import "../styles/global.js";
import "../styles/prism.js";

const Footer = styled.div`
  margin-top: 100px;
  border-top: #bbb solid 1px;
  padding: 35px 0 85px;
  color: #bbb;
`;

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
          <Container>
            <Footer>
              © M6 WEB {new Date().getFullYear()}
              {" — "} Built with{" "}
              <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
            </Footer>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}
