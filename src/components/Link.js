import React from "react";
import styled, { css } from "styled-components";
import Link from "gatsby-link";

import { colors } from "../theme";

const styles = css`
  transition: color .2s;
  cursor: pointer;
  color: inherit;
  border-bottom: dashed 1px;

  ${p => p.naked && { border: "none" }};
  ${p => p.shiny && { color: colors.royal[700] }};

  &:hover {
    color: ${colors.royal[700]};
  }
`;

export default styled.a`
  ${styles};
`;

export const LinkTo = styled(({ naked, shiny, ...rest }) =>
  <Link {...rest} />
)`${styles}`;
