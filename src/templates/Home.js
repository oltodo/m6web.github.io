import React from "react";
import styled from "styled-components";

import Feed from "../components/Feed";
import Nav from "../components/Nav";

class Home extends React.Component {
  render() {
    const {
      data: { allMarkdownRemark: { edges: posts } },
      pathContext: { page, totalPages }
    } = this.props;

    const previousPageLink = `/${page === 2 ? "" : page - 1}`;
    const nextPageLink = `/${page + 1}`;

    return (
      <div>
        <Feed
          posts={posts.map(p => p.node.frontmatter)}
          withHighlight={page === 1}
        />

        <Nav
          prevLink={page > 1 && previousPageLink}
          nextLink={page < totalPages && nextPageLink}
        />
      </div>
    );
  }
}

export default Home;

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
