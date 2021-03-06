import styled from "styled-components";

import { colors } from "../theme";

export default styled.div`
  border: solid 1px #bbb;
  background: none;
  color: #bbb;
  padding: 15px 35px;
  font-size: 19px;
  outline: 0;
  display: inline-block;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  text-align: center;
  width: ${p => (p.fluid ? "100%" : "auto")};

  &:hover {
    color: ${colors.royal[700]};
    border-color: ${colors.royal[700]};
  }
`;
