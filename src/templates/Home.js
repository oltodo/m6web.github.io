import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Feed from "../components/Feed";
import Button from "../components/Button";
import Container from "../components/Container";

const More = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 5px;
  }
`;

export default class Home extends React.Component {
  render() {
    const {
      data: { allMarkdownRemark: { edges: posts } },
      pathContext: { page, totalPages }
    } = this.props;

    return (
      <Container>
        <Feed
          posts={posts.map(p => p.node.frontmatter)}
          withHighlight={page === 1}
        />

        <More>
          <Link to={`/${page === 2 ? "" : page - 1}`}>
            {page > 1 && <Button>PREVIOUS PAGE</Button>}
          </Link>
          <Link to={`/${page + 1}`}>
            {page < totalPages && <Button>NEXT PAGE</Button>}
          </Link>
        </More>
      </Container>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
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
