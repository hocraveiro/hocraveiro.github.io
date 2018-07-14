module.exports = {
  pathPrefix: 'site',
  siteMetadata: {
    title: 'Henrique Craveiro - Full Stack Web Developer',
    siteUrl: `https://henriquecraveiro.com.br`,
    description: `Henrique Craveiro full stack web developer based in Limerick Irelanda.`
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
