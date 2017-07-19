import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

const Foobar = styled.div`background: red;`;

export default class Index extends React.Component {
  render() {
    return (
      <Foobar>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Foobar>
    );
  }
}
