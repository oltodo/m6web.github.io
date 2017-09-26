import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Link from "gatsby-link";

import Container from "./Container";
import Button from "../components/Button";

const Inner = styled.div`
  display: flex;
  justify-content: center;
`;

const Separator = styled.div`
  width: 35px;

  ${({ theme }) => theme.media.sm`
    width: 20px;
  `};
`;

const LinkExtended = styled(props => <Link {...props} />)`
  width: 220px;
  display: block;

  ${({ theme }) => theme.media.sm`
    width: auto;
  `};
`;

const Label = styled.span`
  &:after {
    content: "${p => p.big}";

    ${({ theme }) => theme.media.sm`
        content: "${p => p.small}";
    `};
  }
`;

export default class Nav extends Component {
  static propTypes = {
    prevLink: PropTypes.string,
    nextLink: PropTypes.string
  };

  static defaultProps = {
    prevLink: null,
    nextLink: null
  };

  render() {
    const { prevLink, nextLink } = this.props;

    return (
      <Container>
        <Inner>
          {prevLink && (
            <LinkExtended to={prevLink}>
              <Button fluid>
                <Label big="PREVIOUS PAGE" small="PREV" />
              </Button>
            </LinkExtended>
          )}

          {prevLink && nextLink && <Separator />}

          {nextLink && (
            <LinkExtended to={nextLink}>
              <Button fluid>
                <Label big="NEXT PAGE" small="NEXT" />
              </Button>
            </LinkExtended>
          )}
        </Inner>
      </Container>
    );
  }
}
