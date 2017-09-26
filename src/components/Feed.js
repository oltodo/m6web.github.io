import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { generator } from "uigradients";
import _ from "lodash";

import Container from "../components/Container";
import Link, { LinkTo } from "../components/Link";

import { colors } from "../theme";

const GUTTER = 50;

const FeedRow = styled.div`
  display: flex;

  ${({ theme }) => theme.media.xs`
    display: block;
  `};
`;

const FeedSeparator = styled.div`
  width: 300px;
  height: 1px;
  margin: ${GUTTER * 1.5}px 0;
  ${generator({ gradient: "electric_violet", angle: 225 })};

  ${({ theme }) => theme.media.sm`
    width: 150px;
    margin: ${GUTTER}px 0;
  `};
`;

const Post = styled.div`
  width: 50%;

  &:first-child {
    margin-right: ${GUTTER}px;
  }

  ${p => p.big && css`width: 750px;`};

  ${({ theme }) => theme.media.sm`
    width: 100%;
    &:first-child {
      margin-right: 0;
    }
  `};
`;

const PostImage = styled.div`
  background: ${colors.royal[200]} no-repeat center;
  background-size: cover;
  padding-bottom: 60%;
  ${generator({ gradient: "electric_violet", angle: 225 })};

  ${p => p.src && css`background-image: url(${p.src});`};
`;

const PostContent = styled.div`
  margin-top: 35px;

  ${p => p.margin && css`margin: 0 15px;`};

  ${({ theme }) => theme.media.sm`
    margin-top: 20px;
  `};
`;

const PostTitle = styled(({ big, ...rest }) => <LinkTo {...rest} />)`
  color: #aaa;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  width: 90%;

  ${p => p.big && css`font-size: 60px;`};

  ${({ theme }) => theme.media.xs`
    font-size: 30px;
  `};
`;

const PostDate = styled.div`
  color: #aaa;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 26px;
  line-height: 1.2;

  ${({ theme }) => theme.media.sm`
    font-size: 22px;
  `};

  ${({ theme }) => theme.media.xs`
    font-size: 18px;
  `};
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

  ${({ theme }) => theme.media.xs`
    font-size: 0.8em;
  `};
`;

class Feed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    browser: PropTypes.object.isRequired,
    withHighlight: PropTypes.bool
  };

  renderPost(post, highlighted = false) {
    const { browser } = this.props;

    const image = _.get(post, "image.childImageSharp.resize.src");

    return (
      <Post big={highlighted}>
        <PostImage src={image || null} />
        <PostContent margin={browser.lessThan.md}>
          <PostDate>{post.date}</PostDate>
          <PostTitle naked big={highlighted} to={post.path}>
            {post.title}
          </PostTitle>
          <PostTags>
            {post.authors.map(({ name }) => (
              <PostTag key={name} naked>
                {name}
              </PostTag>
            ))}
            {post.tags.slice(0, 2).map(tag => (
              <PostTag key={tag} naked>
                {tag}
              </PostTag>
            ))}
          </PostTags>
        </PostContent>
      </Post>
    );
  }

  render() {
    const { posts, browser, withHighlight } = this.props;

    const nbColumns = browser.lessThan.md ? 1 : 2;

    const clonedPosts = [...posts];

    return (
      <Container margins={nbColumns > 1}>
        {nbColumns > 1 &&
          withHighlight && (
            <div>
              <FeedRow>{this.renderPost(clonedPosts.shift(), true)}</FeedRow>
              <FeedSeparator />
            </div>
          )}

        {_.chunk(clonedPosts, nbColumns).map(([post1, post2], key) => (
          <div key={key}>
            <FeedRow>
              {this.renderPost(post1)}
              {post2 && this.renderPost(post2)}
            </FeedRow>
            <FeedSeparator />
          </div>
        ))}
      </Container>
    );
  }
}

export default connect(({ browser }) => ({ browser }))(Feed);
