import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1094px;
  margin: 0 auto;
  padding: 0 35px;
`;

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
