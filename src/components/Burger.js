import React, { Component, PropTypes } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  border: 0;
  padding: 0;
  background: none;
  display: block;
  outline: 0;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Line = styled.div`
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  ${p => p.last && css`margin-bottom: 0;`};
  ${p => p.out && css`transition-property: transform;`};
  ${p => p.in && css`transition-property: opacity;`};
  ${p => p.rounded && css`border-radius: 5px;`};
`;

export default class Burger extends Component {
  static propTypes = {
    size: PropTypes.number,
    weight: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    rounded: PropTypes.bool,
    muted: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: 3,
    weight: 2,
    width: 30,
    height: 18,
    color: "#222",
    rounded: false,
    muted: false,
    onClick: () => {}
  };

  handleClick() {
    this.props.onClick();
  }

  renderLines() {
    const lines = [];
    const { size, height, weight, color, rounded, muted } = this.props;
    const gutter = (height - weight * size) / (size - 1);

    for (let index = 1; index <= size; index++) {
      const style = {
        height: `${weight}px`,
        backgroundColor: color
      };

      const isOut = index === 1 || index === size;
      const isIn = index > 1 && index < size;
      const isFirst = index === 1;
      const isLast = index === size;

      if (!isLast) {
        style.marginBottom = `${gutter}px`;
      }

      if (muted) {
        if (isIn) {
          style.opacity = "0";
        }

        if (isFirst) {
          style.transform = `translateY(${height / 2 -
            weight / 2}px) rotate(45deg)`;
        }

        if (isLast) {
          style.transform = `translateY(-${height / 2 -
            weight / 2}px) rotate(-45deg)`;
        }
      }

      lines.push(
        <Line
          key={index}
          out={isOut}
          in={isIn}
          first={isFirst}
          last={isLast}
          style={style}
        />
      );
    }

    return lines;
  }

  render() {
    const { width, height, muted } = this.props;

    const style = {
      width: `${width}px`,
      height: `${height}px`
    };

    if (muted) {
      style.transform = `rotate(180deg)`;
    }

    return (
      <Wrapper style={style} onClick={() => this.handleClick()}>
        {this.renderLines()}
      </Wrapper>
    );
  }
}
