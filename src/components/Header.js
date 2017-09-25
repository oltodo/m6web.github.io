import React from "react";
import styled from "styled-components";
import { generator } from "uigradients";
import Link from "gatsby-link";

import Logo from "./Logo";

const Edge = styled.div`
  height: 4px;
  ${generator({ gradient: "electric_violet", angle: 225 })};
`;

const Content = styled.div`
  height: 140px;
  display: flex;
  max-width: 1280px;
  margin: 0 auto 50px;
  padding: 0 50px;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const MenuItem = styled.div`
  font-weight: 900;
  font-size: 30px;
  color: #d6d6d6;
  margin: 0 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #ccc;

    &:after {
      width: 100%;
      margin-left: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    ${generator({ gradient: "electric_violet", angle: 225 })};
    width: 0;
    margin-left: 50%;
    transition: width 0.2s, margin 0.2s;
    transform-origin: center;
  }
`;

export default () => (
  <div>
    <Edge />
    <Content>
      <Link to="/">
        <Logo height={70} />
      </Link>
      <Menu>
        <Link to="/">
          <MenuItem>HOME</MenuItem>
        </Link>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>JOBS</MenuItem>
        <MenuItem>OSS</MenuItem>
      </Menu>
    </Content>
  </div>
);
