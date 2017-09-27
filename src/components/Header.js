import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { generator } from "uigradients";
import Link, { navigateTo } from "gatsby-link";
import EventListener, { withOptions } from "react-event-listener";

import Logo from "./Logo";
import Container from "./Container";
import Burger from "./Burger";

import { menu as items } from "../config";
import { colors } from "../theme";

const HEADER_HEIGHT_LARGE = 140;
const HEADER_HEIGHT_SMALL = 100;
const HEADER_HEIGHT_STICKY = 70;
const HEADER_MARGIN_LARGE = 50;
const HEADER_MARGIN_SMALL = 20;

const LOGO_HEIGHT_LARGE = 60;
const LOGO_HEIGHT_SMALL = 40;
const LOGO_HEIGHT_STICKY = 40;

const BURGER_WIDTH = 40;
const BURGER_HEIGHT = 30;

const Content = styled.div`
  height: ${HEADER_HEIGHT_LARGE}px;
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto ${HEADER_MARGIN_LARGE}px;
  padding: 0 20px;

  ${({ theme }) => theme.media.sm`
    height: ${HEADER_HEIGHT_SMALL}px;
    margin-bottom: ${HEADER_MARGIN_SMALL}px;
  `};
`;

const Edge = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 100;
  transition: height 0.2s ease-out;
  overflow-y: hidden;
  ${generator({ gradient: "electric_violet", angle: 225 })};

  ${p => p.opened && css`height: 100% !important;`};

  ${p => p.sticky && css`height: ${HEADER_HEIGHT_STICKY}px;`};
`;

const EdgeContent = Content.extend`
  height: ${HEADER_HEIGHT_SMALL}px !important;

  ${p => p.sticky && css`height: ${HEADER_HEIGHT_STICKY}px !important;`};
`;

const MenuHorizontal = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const MenuHorizontalItem = styled(({ negative, ...rest }) => (
  <Link {...rest} />
))`
  font-weight: 900;
  font-size: 30px;
  color: #${p => (p.negative ? "fff" : "d6d6d6")};
  margin: 0 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #${p => (p.negative ? "fff" : "ccc")};

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
    width: 0;
    margin-left: 50%;
    transition: width 0.2s, margin 0.2s;
    transform-origin: center;
    background: white;
    ${p =>
      !p.negative && generator({ gradient: "electric_violet", angle: 225 })};
  }
`;

const MenuVertical = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  visibility: hidden;
  transition: visibility 0s 0.2s;

  ${p =>
    p.displayed &&
    css`
      transition: visibility 0s;
      visibility: visible;
    `};
`;

const MenuVerticalItem = styled.div`
  font-weight: 900;
  font-size: 30px;
  color: white;
  margin: 6px 0;
  cursor: pointer;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s linear;

  ${p =>
    p.displayed &&
    css`
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.2s linear, transform 0.1s;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition-delay: ${p.index * 0.1 + 0.1}s;
    `};
`;

const BurgerWrapper = styled.div`margin-left: auto;`;

class Header extends Component {
  constructor() {
    super();

    this.state = {
      displayed: false,
      sticky: false
    };
  }

  handleScroll(e) {
    const sticky = window.scrollY > 150;

    if (sticky !== this.state.sticky) {
      this.setState({ sticky });
    }
  }

  handleBurgerClick() {
    this.setState({
      displayed: !this.state.displayed
    });
  }

  handleMenuItemClick(path) {
    this.setState(
      {
        displayed: false
      },
      () => {
        setTimeout(() => {
          navigateTo(path);
        }, 200);
      }
    );
  }

  renderBurger(negative = false) {
    const { displayed } = this.state;

    return (
      <BurgerWrapper>
        <Burger
          color={negative ? "white" : "#ddd"}
          weight={6}
          width={BURGER_WIDTH}
          height={BURGER_HEIGHT}
          muted={displayed}
          onClick={() => this.handleBurgerClick()}
        />
      </BurgerWrapper>
    );
  }

  renderHorizontalMenu(negative = false) {
    const { browser } = this.props;
    const { displayed } = this.state;

    if (browser.width >= 700) {
      return (
        <MenuHorizontal>
          {items.map(({ label, path }) => (
            <MenuHorizontalItem to={path} key={label} negative={negative}>
              {label}
            </MenuHorizontalItem>
          ))}
        </MenuHorizontal>
      );
    }

    return this.renderBurger(negative);
  }

  renderVerticalMenu() {
    const { displayed } = this.state;

    return (
      <MenuVertical displayed={displayed}>
        {items.map(({ label, path }, index) => (
          <MenuVerticalItem
            key={label}
            onClick={() => this.handleMenuItemClick(path)}
            displayed={displayed}
            index={index}
          >
            {label}
          </MenuVerticalItem>
        ))}
      </MenuVertical>
    );
  }

  renderLogo(negative = false, height) {
    const { browser } = this.props;

    return (
      <Link to="/">
        <Logo
          height={height}
          startColor={negative ? "white" : colors.purple[300]}
          endColor={negative ? "white" : colors.purple[700]}
        />
      </Link>
    );
  }

  render() {
    const { browser } = this.props;
    const { displayed, sticky } = this.state;

    return (
      <div>
        <EventListener
          target="window"
          onResize={this.handleResize}
          onScroll={withOptions(() => this.handleScroll(), {
            passive: true,
            capture: false
          })}
        />

        <Edge sticky={sticky} opened={displayed}>
          <EdgeContent sticky={sticky}>
            {!displayed && this.renderLogo(true, LOGO_HEIGHT_STICKY)}
            {this.renderHorizontalMenu(true)}
          </EdgeContent>

          {browser.width < 700 && this.renderVerticalMenu()}
        </Edge>

        <Content>
          {this.renderLogo(
            false,
            browser.lessThan.md ? LOGO_HEIGHT_SMALL : LOGO_HEIGHT_LARGE
          )}
          {this.renderHorizontalMenu()}
        </Content>
      </div>
    );
  }
}

export default connect(({ browser }) => ({ browser }))(Header);
