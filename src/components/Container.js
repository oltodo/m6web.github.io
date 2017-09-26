import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  ${p => p.margins && css`padding: 0 15px;`};
`;

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.any,
    margins: PropTypes.bool
  };

  render() {
    const { margins = true } = this.props;

    return <Wrapper margins={margins}>{this.props.children}</Wrapper>;
  }
}
