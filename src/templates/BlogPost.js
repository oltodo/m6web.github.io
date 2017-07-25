import React, { Component } from "react";
import Helmet from "react-helmet";
import _ from "lodash";
import styled, { css } from "styled-components";
import { generator } from "uigradients";
import wrap from "word-wrap";
import chroma from "chroma-js";

import Container from "../components/Container";
import PostContent from "../components/PostContent";
import { colors } from "../theme";

import "../css/post.css";

const GUTTER = 50;

const FeaturedImage = styled.div`
  position: relative;
  background: ${colors.royal[200]} no-repeat center;
  ${generator({ gradient: "electric_violet", angle: 225 })};
  background-size: cover;
  margin-bottom: ${GUTTER}px;

  &:before {
    content: "";
    display: block;
    padding-bottom: 60%;
  }

  ${p =>
    p.src &&
    css`
    background-image: url(${p.src});
    `};
`;

const Title = styled.h1`
  position: absolute;
  font-weight: 700;
  font-size: ${p => (p.long ? 60 : 70)}px;
  top: 0;
  left: 0;
  bottom: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TitleRow = styled.span`
  line-height: 110px;
  margin: 8px 0 0;
  width: auto;
  line-height: 1.2em;

  > span {
    background: ${p => p.color};
    padding: 0 2px;
    display: inline-block;
  }
`;

const Separator = styled.div`
  width: 300px;
  height: 1px;
  margin: ${GUTTER * 1.5}px 0;
  ${generator({ gradient: "electric_violet", angle: 225 })};
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-left: 100px;
`;

export default class BlogPost extends Component {
  renderHeader() {
    const { markdownRemark: post } = this.props.data;
    const { title } = post.frontmatter;

    const image = _.get(post.frontmatter, "image.childImageSharp.resize.src");

    const long = title.length > 60;
    const splittedTitle = wrap(title, { width: long ? 20 : 17 }).split("\n");

    const lineColors = chroma
      .scale([colors.purple[500], colors.royal[500]])
      .mode("lch")
      .colors(5);

    return (
      <FeaturedImage src={image}>
        <Title long={long}>
          {splittedTitle.map((line, index) =>
            <TitleRow key={index} color={lineColors[index]}>
              <span>
                {line.trim()}
              </span>
            </TitleRow>
          )}
        </Title>
      </FeaturedImage>
    );
  }

  render() {
    const { markdownRemark: post } = this.props.data;

    return (
      <Container>
        <Helmet title={post.frontmatter.title} />
        {this.renderHeader()}

        <Content>
          <PostContent
            ast={JSON.parse(post.ast)}
            title={post.frontmatter.title}
          />
        </Content>
      </Container>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ast
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            resize(width: 750, height: 450) {
              src
            }
          }
        }
      }
    }
  }
`;
