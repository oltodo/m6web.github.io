import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { generator } from "uigradients";
import _ from "lodash";
import GatsbyLink from "gatsby-link";

import Link from "../components/Link";

import { colors } from "../theme";

const GUTTER = 50;

const Wrapper = styled.div``;

const FeedRow = styled.div`display: flex;`;

const FeedSeparator = styled.div`
  width: 300px;
  height: 1px;
  margin: ${GUTTER * 1.5}px 0;
  ${generator({ gradient: "electric_violet", angle: 225 })};
`;

const Post = styled.div`
  width: 50%;

  &:first-child {
    margin-right: ${GUTTER}px;
  }

  ${p =>
    p.big &&
    css`
    width: 750px;
  `};
`;

const PostImage = styled.div`
  background: ${colors.royal[200]} no-repeat center;
  background-size: cover;
  padding-bottom: 60%;
  ${generator({ gradient: "electric_violet", angle: 225 })};

  ${p =>
    p.src &&
    css`
    background-image: url(${p.src});
    `};
`;

const PostTitle = Link.extend`
  color: #aaa;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  width: 90%;

  ${p =>
    p.big &&
    css`
    font-size: 60px;
  `};
`;

const PostDate = styled.div`
  color: #aaa;
  font-weight: 400;
  margin-top: 35px;
  margin-bottom: 15px;
  font-size: 26px;
  line-height: 1.2;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  line-height: 1.5;
`;

const PostTag = Link.extend`
  color: #ccc;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  &:after {
    content: "•";
    margin: 0 10px;
    color: #ccc;
  }

  &:last-child:after {
    display: none;
  }
`;

export default class Feed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    withHighlight: PropTypes.array.bool
  };

  renderPost(post, highlighted = false) {
    const image = _.get(post, "image.childImageSharp.resize.src");

    return (
      <Post big={highlighted}>
        <PostImage src={image || null} />
        <PostDate>
          {post.date}
        </PostDate>
        <GatsbyLink to={post.path}>
          <PostTitle naked big={highlighted}>
            {post.title}
          </PostTitle>
        </GatsbyLink>
        <PostTags>
          {post.authors.map(({ name }) =>
            <PostTag naked>
              {name}
            </PostTag>
          )}
          {post.tags.slice(0, 2).map(tag =>
            <PostTag naked>
              {tag}
            </PostTag>
          )}
        </PostTags>
      </Post>
    );
  }

  render() {
    const { posts, withHighlight } = this.props;

    return (
      <Wrapper>
        {withHighlight &&
          <div>
            <FeedRow>
              {this.renderPost(posts.shift(), true)}
            </FeedRow>
            <FeedSeparator />
          </div>}

        {_.chunk(posts, 2).map(([post1, post2], key) =>
          <div key={key}>
            <FeedRow>
              {this.renderPost(post1)}
              {post2 && this.renderPost(post2)}
            </FeedRow>
            <FeedSeparator />
          </div>
        )}
      </Wrapper>
    );
  }
}
