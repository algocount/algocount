module.exports = {
  siteMetadata: {
    title: `Algocount`,
    siteUrl: `https://algocount.org/`,
    description: `Public Perception of Algorithms in Society. Accounting for the Algorithmic Public Opinion`,
  },
  plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}