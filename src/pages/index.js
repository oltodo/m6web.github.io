import React from "react";
import styled from "styled-components";

import Feed from "../components/Feed";

const Container = styled.div`
  max-width: 1094px;
  margin: 0 auto;
  padding: 0 35px;
`;

export default class Index extends React.Component {
  render() {
    const { allMarkdownRemark: { edges: posts } } = this.props.data;

    return (
      <Container>
        <Feed posts={posts.map(p => p.node.frontmatter)} />
      </Container>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 50
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            authors {
              name
            }
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
    }
  }
`;
