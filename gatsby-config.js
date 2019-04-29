module.exports = {
  siteMetadata: {
    title: `Black Birthdays`,
    description: `February is Black History Month.`,
    author: `@ashleemboyer`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Black Birthdays',
        short_name: '',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#eeeeee',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      trackingId: 'UA-129788768-2',
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    'gatsby-plugin-offline',
  ],
}
