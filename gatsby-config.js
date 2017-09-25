module.exports = {
  siteMetadata: {
    title: "M6WEB•TECH•BLOG"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "transformer-remark",
      options: {
        plugins: [
          {
            resolve: `remark-images`,
            options: {
              maxWidth: 740
            }
          }
        ]
      }
    }
  ]
};
