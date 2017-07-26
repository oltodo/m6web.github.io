import styled from "styled-components";

import { colors } from "../theme";

export default styled.a`
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
