module.exports = {
  siteMetadata: {
    title: `Algocount`,
    siteUrl: `https://algocount.org/`,
    description: `Public Perception of Algorithms in Society. Accounting for the Algorithmic Public Opinion`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
