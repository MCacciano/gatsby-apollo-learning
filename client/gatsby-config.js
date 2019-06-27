module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'XIVAPI',
        fieldName: 'xivapi',
        url: 'http://localhost:4000',
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
