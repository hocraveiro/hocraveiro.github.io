module.exports = {
  siteMetadata: {
    title: 'Henrique Craveiro',
    siteUrl: `https://henriquecraveiro.com.br`,
    description: `Blazing-fast static site generator for React`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
