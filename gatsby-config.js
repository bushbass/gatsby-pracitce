module.exports = {
  siteMetadata: {
    title: `Alex Nielsen's Portfolio!`,
    siteUrl: `https://www.AlexNielsen.com`,
    description: `Blog and Portfolio for Alex Nielsen Web Developer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ]
}
