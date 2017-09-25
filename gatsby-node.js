const path = require("path");
const _ = require("lodash");

const config = require("./src/config");

const homeTemplate = path.resolve(`src/templates/Home.js`);
const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);

const createBlogPostPages = (posts, createPage) => {
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    });
  });
};

const createHomePages = (posts, createPage) => {
  const { postsPerPage } = config;

  // La première page doit avoir un article de plus
  _.chunk(_.slice(posts, 1), postsPerPage).forEach(({ node }, index) => {
    createPage({
      path: index ? `/${index + 1}` : "/",
      component: homeTemplate,
      context: {
        skip: index ? index * postsPerPage + 1 : 0,
        page: index + 1,
        limit: index ? postsPerPage : postsPerPage + 1,
        totalPages: Math.ceil(posts.length / postsPerPage)
      }
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            ast
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const { edges: posts } = result.data.allMarkdownRemark;

    createHomePages(posts, createPage);
    createBlogPostPages(posts, createPage);

    return null;
  });
};
